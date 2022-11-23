import { App, Stack } from 'aws-cdk-lib';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import { AliasedPortExtension, Container, Environment, Service, ServiceDescription } from '../lib';

const app = new App();
const stack = new Stack(app, 'aws-ecs-integ');

const environment = new Environment(stack, 'production');

const aliasedPortServiceDescription = new ServiceDescription();

aliasedPortServiceDescription.add(new Container({
  cpu: 256,
  memoryMiB: 512,
  trafficPort: 80,
  image: ecs.ContainerImage.fromRegistry('nathanpeck/name'),
  environment: {
    PORT: '80',
  },
}));

aliasedPortServiceDescription.add(new AliasedPortExtension({
  alias: 'name',
  containerPort: 80,
}));

new Service(stack, 'ServiceConnect', {
  environment: environment,
  serviceDescription: aliasedPortServiceDescription,
  autoScaleTaskCount: {
    maxTaskCount: 2,
  },
});
