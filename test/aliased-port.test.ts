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
    expect(() => {
      serviceDescription.add(new AliasedPortExtension({
        alias: 'name',
      }));
    }).toThrow('Aliased Port extension requires a Container Extension to already exist.');
  });

  test('service connect cannot be enabled with two different namespaces.', () => {
    serviceDescription.add(new Container({
      cpu: 256,
      memoryMiB: 512,
      trafficPort: 80,
      image: ecs.ContainerImage.fromRegistry('nathanpeck/name'),
    }));
    serviceDescription.add(new AliasedPortExtension({
      alias: 'direct', 
    });
    serviceDescription.add(new AliasedPortExtension({
      alias: 'indirect',
      portMapping: {
        containerPort: 8080,
        name: 'indirect', 
        appProtocol: ecs.AppProtocol.GRPC,
      },
    }));
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