import { Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import * as appmesh from 'aws-cdk-lib/aws-appmesh';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import { Alias } from 'aws-cdk-lib/aws-kms';
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
    Template.fromStack(stack).hasResourceProperties('AWS::ECS::Service');
  });
});