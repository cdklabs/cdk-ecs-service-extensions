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
  * The port on the container to expose to dns connections.
  */
  readonly containerPort?: number;

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

  /**
   * The Log Driver to use for service connect traffic logging.
   *
   * @default no logging.
   */
  readonly logDriver?: ecs.LogDriver;
}

export class AliasedPortExtension extends ServiceExtension {
  protected containerPort: number;
  protected aliasDnsName: string;
  protected aliasPort: number;
  protected discoveryName?: string;
  protected namespace?: cloudmap.INamespace;
  protected appProtocol?: ecs.AppProtocol;
  protected logDriver?: ecs.LogDriver;

  protected parentServiceContainer: Container;
  protected createNewPortMapping: boolean;

  constructor(props: AliasedPortProps) {
    super('aliasedPort');

    // Find the container extension to get its port.
    const containerextension = this.parentService.serviceDescription.get('service-container') as Container;

    if (!containerextension || !containerextension.container) {
      throw new Error('Aliased port extension requires a container extension.');
    }
    this.parentServiceContainer = containerextension;

    let trafficPort: number = this.parentServiceContainer.trafficPort;
    this.containerPort = trafficPort;
    this.createNewPortMapping = false;
    if (props.containerPort && props.containerPort != trafficPort) {
      this.containerPort = props.containerPort;
      this.createNewPortMapping = true;
    }


    if (props.aliasTrafficPort) {
      trafficPort = props.aliasTrafficPort;
    };

    this.aliasDnsName = props.alias;
    this.aliasPort = trafficPort;

    this.discoveryName = props.discoveryName;
    this.appProtocol = props.protocol;
    this.logDriver = props.logDriver;
  }


  public prehook(service: Service, scope: Construct) {
    this.parentService = service;
    this.scope = scope;

    // If there isn't a default cloudmap namespace on the cluster, create a private HTTP namespace for SC.
    if (!this.parentService.cluster.defaultCloudMapNamespace) {
      this.parentService.environment.addDefaultCloudMapNamespace({
        name: this.parentService.environment.id,
        type: cloudmap.NamespaceType.HTTP,
      });
    }
    this.namespace = this.parentService.environment.cluster.defaultCloudMapNamespace;
  }

  public addHooks(): void {

    // Container extension must have a container. The default protocol is TCP.
    if (!this.parentServiceContainer.container) {
      throw new Error('Container Extension must have a default container.');
    }
    var webPortMapping = this.parentServiceContainer.container.findPortMapping(this.parentServiceContainer.trafficPort, ecs.Protocol.TCP);
    if (!webPortMapping) {
      throw new Error(`Port ${this.parentServiceContainer.trafficPort} does not exist on the given container.`);
    }
    this.parentServiceContainer.addContainerMutatingHook(new AliasedPortMutatingHook({
      portMappingName: this.aliasDnsName,
      containerPort: this.containerPort,
      protocol: this.appProtocol,
      newPortMapping: this.createNewPortMapping,
    }));
  }

  public modifyServiceProps(props: ServiceBuild): ServiceBuild {
    if (props.serviceConnectConfiguration && props.serviceConnectConfiguration.namespace != this.namespace) {
      throw new Error('Service connect cannot be enabled with two different namespaces.');
    }
    const ns = this.namespace? this.namespace : this.parentService.cluster.defaultCloudMapNamespace;
    if (!ns) {
      throw new Error('Cloudmap namespace must be specified in either properties or environment.');
    }
    if (!this.parentServiceContainer.container) {
      throw new Error('Parent service must have a container to enable an Aliased Port Extension.');
    }
    if (!props.serviceConnectConfiguration) {
      return {
        ...props,

        serviceConnectConfiguration: {
          enabled: true,
          namespace: ns,
          services: [
            {
              port: this.aliasDnsName,
              discoveryName: this.discoveryName,
              aliases: [
                {
                  dnsName: this.aliasDnsName,
                  port: this.aliasPort,
                },
              ],
            },
          ],
        },
      };
    }
    let services: ecs.ServiceConnectService[] = props.serviceConnectConfiguration.services || [];
    services.push({
      port: this.aliasDnsName,
      discoveryName: this.discoveryName,
      aliases: [
        {
          port: this.aliasPort,
          dnsName: this.aliasDnsName,
        },
      ],
    });
    const scConfig = {
      ...props.serviceConnectConfiguration,
      services: services,
    };
    return {
      ...props,

      serviceConnectConfiguration: scConfig,
    };
  }
}

export interface AliasedPortMutatingHookProps {
  readonly containerPort: number;
  readonly portMappingName: string;
  readonly trafficPort?: number;
  readonly protocol?: ecs.AppProtocol;
  readonly newPortMapping?: boolean;
}

/**
 * This hook modifies the application container's settings so that
 * its primary port mapping has a name.
 */
export class AliasedPortMutatingHook extends ContainerMutatingHook {
  private portMappingName: string;
  private portMappingProtocol?: ecs.AppProtocol;
  private trafficPort: number;
  private createNewPortMapping: boolean;

  constructor(props: AliasedPortMutatingHookProps) {
    super();
    this.portMappingName = props.portMappingName;
    this.trafficPort = props.containerPort;
    if (props.trafficPort) {
      this.trafficPort = props.trafficPort;
    }
    this.portMappingProtocol = props.protocol;
    this.createNewPortMapping = props.newPortMapping ? props.newPortMapping : false;
  }

  public mutateContainerDefinition(props: ecs.ContainerDefinitionOptions): ecs.ContainerDefinitionOptions {
    return this.createNewPortMapping ? {
      ...props,

      portMappings: [
        {
          containerPort: this.trafficPort,
          name: this.portMappingName,
          appProtocol: this.portMappingProtocol,
        },
      ],
    } as ecs.ContainerDefinitionOptions : props;
  }
}
