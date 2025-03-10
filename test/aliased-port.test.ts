import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import { AliasedPortExtension, Container, Environment, ServiceDescription, Service } from '../lib';

describe('aliased port', () => {
  let stack: Stack;
  let environment: Environment;
  let serviceDescription: ServiceDescription;
  beforeEach(() => {
    stack = new Stack();
    environment = new Environment(stack, 'production');
    serviceDescription = new ServiceDescription();
  });

  test('aliased port extension throws error when no container extension exists', () => {

    serviceDescription.add(new AliasedPortExtension({
      alias: 'name',
    }));

    expect(() => {
      new Service(stack, 'my-service', {
        environment,
        serviceDescription,
      });
    }).toThrow('Service \'my-service\' must have a Container extension');
  });

  test('when adding all options', () => {
    serviceDescription.add(new Container({
      cpu: 256,
      memoryMiB: 512,
      trafficPort: 80,
      image: ecs.ContainerImage.fromRegistry('nathanpeck/name'),
    }));

    serviceDescription.add(new AliasedPortExtension({
      alias: 'name',
      aliasPort: 1000,
      appProtocol: ecs.AppProtocol.grpc,
    }));

    new Service(stack, 'my-service', {
      environment,
      serviceDescription,
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::ECS::TaskDefinition', {
      ContainerDefinitions: [
        {
          PortMappings: [
            {
              Name: 'name',
              Protocol: 'tcp',
              AppProtocol: 'grpc',
              ContainerPort: 80,
            },
          ],
        },
      ],
    });

    Template.fromStack(stack).hasResourceProperties('AWS::ECS::Service', {
      ServiceConnectConfiguration: {
        Enabled: true,
        Namespace: 'production',
        Services: [
          {
            PortName: 'name',
            ClientAliases: [
              {
                Port: 1000,
                DnsName: 'name',
              },
            ],
          },
        ],
      },
    });
  });

  test('when adding an aliased port with minimal config', () => {
    serviceDescription.add(new Container({
      cpu: 256,
      memoryMiB: 512,
      trafficPort: 80,
      image: ecs.ContainerImage.fromRegistry('nathanpeck/name'),
    }));

    serviceDescription.add(new AliasedPortExtension({
      alias: 'name',
    }));

    new Service(stack, 'my-service', {
      environment,
      serviceDescription,
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::ECS::Service', {
      ServiceConnectConfiguration: {
        Enabled: true,
        Namespace: 'production',
        Services: [
          {
            PortName: 'name',
            ClientAliases: [
              {
                Port: 80,
                DnsName: 'name',
              },
            ],
          },
        ],
      },
    });
  });

  test('when enabling service connect on a client service', () => {
    serviceDescription.add(new Container({
      cpu: 256,
      memoryMiB: 512,
      trafficPort: 80,
      image: ecs.ContainerImage.fromRegistry('nathanpeck/name'),
    }));

    environment.addDefaultCloudMapNamespace({
      name: environment.id,
    });

    const svc = new Service(stack, 'my-service', {
      environment,
      serviceDescription,
    });
    svc.enableServiceConnect();

    Template.fromStack(stack).hasResourceProperties('AWS::ECS::Service', {
      ServiceConnectConfiguration: {
        Enabled: true,
        Namespace: 'production',
      },
    });
  });

  test('cannot enable service connect on a cluster with no namespace', () => {
    serviceDescription.add(new Container({
      cpu: 256,
      memoryMiB: 512,
      trafficPort: 80,
      image: ecs.ContainerImage.fromRegistry('nathanpeck/name'),
    }));
    const svc = new Service(stack, 'my-service', {
      environment,
      serviceDescription,
    });

    expect(() => {
      svc.enableServiceConnect();
    }).toThrow('Environment must have a default CloudMap namespace to enable Service Connect.');
  });

  test('cannot add two Aliased Port extensions', () => {
    serviceDescription.add(new Container({
      cpu: 256,
      memoryMiB: 512,
      trafficPort: 80,
      image: ecs.ContainerImage.fromRegistry('nathanpeck/name'),
    }));
    serviceDescription.add(new AliasedPortExtension({
      alias: 'name',
    }));
    expect(() => {
      serviceDescription.add(new AliasedPortExtension({
        alias: 'name2',
        aliasPort: 8080,
      }));
    }).toThrow('An extension called aliasedPort has already been added');
  });
});