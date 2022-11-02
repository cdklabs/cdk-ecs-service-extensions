import { App, Stack } from 'aws-cdk-lib';
import { Mesh } from 'aws-cdk-lib/aws-appmesh';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import { Container, Environment, Service, ServiceDescription, AppMeshExtension } from '../lib';

const app = new App();
const stack = new Stack(app, 'aws-ecs-integ');

const production = new Environment(stack, 'production');
const development = new Environment(stack, 'development');

const productionMesh = new Mesh(stack, 'production-mesh');
const developmentMesh = new Mesh(stack, 'development-mesh');

/** Production name service */
const productionNameDescription = new ServiceDescription();
productionNameDescription.add(new Container({
  cpu: 1024,
  memoryMiB: 2048,
  trafficPort: 80,
  image: ecs.ContainerImage.fromRegistry('nathanpeck/name'),
  environment: {
    PORT: '80',
  },
}));
productionNameDescription.add(new AppMeshExtension({ mesh: productionMesh }));

new Service(stack, 'name-production', {
  environment: production,
  serviceDescription: productionNameDescription,
});

/** Development name service */
const developmentNameDescription = new ServiceDescription();
developmentNameDescription.add(new Container({
  cpu: 1024,
  memoryMiB: 2048,
  trafficPort: 80,
  image: ecs.ContainerImage.fromRegistry('nathanpeck/name'),
  environment: {
    PORT: '80',
  },
}));
developmentNameDescription.add(new AppMeshExtension({ mesh: developmentMesh }));

new Service(stack, 'name-development', {
  environment: development,
  serviceDescription: developmentNameDescription,
});

/**
 * This test verifies the edge case of creating multiple environments
 * on the same account to ensure that there are no conflicts.
 */