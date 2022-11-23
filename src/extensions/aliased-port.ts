import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as cloudmap from 'aws-cdk-lib/aws-servicediscovery';
import { Construct } from 'constructs';
import { Service } from '../service';
import { Container } from './container';
import { ContainerMutatingHook, ServiceBuild, ServiceExtension } from './extension-interfaces';


/**
 * AliasedPortProps defines the properties of an aliased port extension
 */
export interface AliasedPortProps {
  /**
   * The DNS alias to advertise for downstream clients.
   */
  readonly alias: string;
  /**
   * The protocol to use over the specified port.
   *
   * May be one of HTTP, HTTP2, or GRPC.
   *
   * @default none
   */
  readonly protocol?: ecs.AppProtocol;

  /**
   * An optional intermediate discovery name to register this service to within the namespace.
   */
  readonly discoveryName?: string;

  /**
   * The traffic port for clients to use to connect to the DNS alias.
   *
   * @default same as containerPort.
   */
  readonly aliasTrafficPort?: number;
}

export class AliasedPortExtension extends ServiceExtension {
  protected aliasDnsName: string;
  protected aliasPort?: number;
  protected discoveryName?: string;
  protected namespace?: cloudmap.INamespace;
  protected appProtocol?: ecs.AppProtocol;

  constructor(props: AliasedPortProps) {
    super('aliasedPort');

    this.aliasPort = props.aliasTrafficPort;
    this.aliasDnsName = props.alias;
    this.aliasPort = props.aliasTrafficPort;

    this.discoveryName = props.discoveryName;
    this.appProtocol = props.protocol;
  }

  public prehook(service: Service, scope: Construct) {
    this.parentService = service;
    this.scope = scope;

    // If there isn't a default cloudmap namespace on the cluster, create a private HTTP namespace for SC.
    if (!this.parentService.cluster.defaultCloudMapNamespace) {
      this.parentService.environment.addDefaultCloudMapNamespace({
        name: this.parentService.environment.id,
      });
    }
    this.namespace = this.parentService.environment.cluster.defaultCloudMapNamespace;
  }

  public addHooks(): void {
    const containerextension = this.parentService.serviceDescription.get('service-container') as Container;
    if (!containerextension) {
      throw new Error('Aliased Port extension requires a Container extension to already exist.');
    }

    containerextension.addContainerMutatingHook(new AliasedPortMutatingHook({
      portMappingName: this.aliasDnsName,
      trafficPort: containerextension.trafficPort,
      protocol: this.appProtocol,
    }));
  }

  public modifyServiceProps(props: ServiceBuild): ServiceBuild {
    if (props.serviceConnectConfiguration && props.serviceConnectConfiguration.namespace !== this.namespace) {
      throw new Error('Service connect cannot be enabled with two different namespaces.');
    }

    const containerextension = this.parentService.serviceDescription.get('service-container') as Container;

    if (!containerextension.container) {
      throw new Error('Parent service must have a container to enable an Aliased Port Extension.');
    }
    if (!containerextension.trafficPort && !this.aliasPort) {
      throw new Error('Cannot infer port: container has no traffic port and aliasPort was not specified.');
    }

    const portMappingName = this.aliasDnsName;
    const aliasPort = this.aliasPort ? this.aliasPort : containerextension.trafficPort;
    // If there is already a service connect config, we need to modify the existing properties instead of creating new ones.
    // Push a new service to the list of services.
    let services: ecs.ServiceConnectService[] = [];
    if (props.serviceConnectConfiguration) {
      services = props.serviceConnectConfiguration.services ? props.serviceConnectConfiguration.services : [];
    }
    services.push({
      port: portMappingName,
      discoveryName: this.discoveryName,
      aliases: [
        {
          port: aliasPort,
          dnsName: this.aliasDnsName,
        },
      ],
    });
    if (!props.serviceConnectConfiguration) {
      return {
        ...props,

        serviceConnectConfiguration: {
          enabled: true,
          namespace: this.namespace || this.parentService.cluster.defaultCloudMapNamespace,
          services: services,
        },
      };
    }

    return {
      ...props,

      serviceConnectConfiguration: {
        ...props.serviceConnectConfiguration,
        services: services,
      },
    };
  }
}

export interface AliasedPortMutatingHookProps {
  /**
   * The name by which to refer to this port mapping.
   */
  readonly portMappingName: string;
  /**
   * The port on the container which receives traffic. This is the same as the `containerPort` property of port mapping.
   */
  readonly trafficPort: number;
  /**
   * The protocol which this port mapping expects to receive.
   *
   * @default: none
   */
  readonly protocol?: ecs.AppProtocol;
}

/**
 * This hook modifies the application container's settings so that
 * its primary port mapping has a name.
 */
export class AliasedPortMutatingHook extends ContainerMutatingHook {
  private portMappingName: string;
  private portMappingProtocol?: ecs.AppProtocol;
  private trafficPort: number;

  constructor(props: AliasedPortMutatingHookProps) {
    super();
    this.portMappingName = props.portMappingName;
    this.trafficPort = props.trafficPort;
    this.portMappingProtocol = props.protocol;
  }

  public mutateContainerDefinition(props: ecs.ContainerDefinitionOptions): ecs.ContainerDefinitionOptions {
    return {
      ...props,

      portMappings: [
        {
          containerPort: this.trafficPort,
          name: this.portMappingName,
          appProtocol: this.portMappingProtocol,
        },
      ],
    } as ecs.ContainerDefinitionOptions;
  }
}
