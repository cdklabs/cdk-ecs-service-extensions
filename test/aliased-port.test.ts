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
      aliasTrafficPort: 1000,
      protocol: ecs.AppProtocol.grpc,
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
});