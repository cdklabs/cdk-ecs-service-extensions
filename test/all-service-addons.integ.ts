import { App, Stack } from 'aws-cdk-lib';
import { Mesh } from 'aws-cdk-lib/aws-appmesh';
import { ContainerImage } from 'aws-cdk-lib/aws-ecs';
import { AppMeshExtension, CloudwatchAgentExtension, Container, Environment, FireLensExtension, HttpLoadBalancerExtension, Service, ServiceDescription, XRayExtension } from '../src';

const app = new App();
const stack = new Stack(app, 'aws-ecs-integ');

const mesh = new Mesh(stack, 'my-mesh');
const environment = new Environment(stack, 'production');

/** Name service */
const nameDescription = new ServiceDescription();
nameDescription.add(new Container({
  cpu: 1024,
  memoryMiB: 2048,
  trafficPort: 80,
  image: ContainerImage.fromRegistry('nathanpeck/name'),
  environment: {
    PORT: '80',
  },
}));
nameDescription.add(new AppMeshExtension({ mesh }));
nameDescription.add(new FireLensExtension());
nameDescription.add(new XRayExtension());
nameDescription.add(new CloudwatchAgentExtension());

const nameService = new Service(stack, 'name', {
  environment: environment,
  serviceDescription: nameDescription,
  autoScaleTaskCount: {
    maxTaskCount: 10,
    minTaskCount: 2,
    targetCpuUtilization: 75,
  },
  desiredCount: 2,
});

/** Greeting service */
const greetingDescription = new ServiceDescription();
greetingDescription.add(new Container({
  cpu: 1024,
  memoryMiB: 2048,
  trafficPort: 80,
  image: ContainerImage.fromRegistry('nathanpeck/greeting'),
  environment: {
    PORT: '80',
  },
}));
greetingDescription.add(new AppMeshExtension({ mesh }));
greetingDescription.add(new FireLensExtension());
greetingDescription.add(new XRayExtension());
greetingDescription.add(new CloudwatchAgentExtension());

const greetingService = new Service(stack, 'greeting', {
  environment: environment,
  serviceDescription: greetingDescription,
  desiredCount: 2,
  autoScaleTaskCount: {
    minTaskCount: 2,
    maxTaskCount: 10,
    targetCpuUtilization: 75,
  },
});

/** Greeter service */
const greeterDescription = new ServiceDescription();
greeterDescription.add(new Container({
  cpu: 1024,
  memoryMiB: 2048,
  trafficPort: 80,
  image: ContainerImage.fromRegistry('nathanpeck/greeter'),
  environment: {
    PORT: '80',
    GREETING_URL: 'http://greeting.production',
    NAME_URL: 'http://name.production',
  },
}));
greeterDescription.add(new AppMeshExtension({ mesh }));
greeterDescription.add(new FireLensExtension());
greeterDescription.add(new XRayExtension());
greeterDescription.add(new CloudwatchAgentExtension());
greeterDescription.add(new HttpLoadBalancerExtension());

const greeterService = new Service(stack, 'greeter', {
  environment: environment,
  serviceDescription: greeterDescription,
  desiredCount: 2,
  autoScaleTaskCount: {
    minTaskCount: 2,
    maxTaskCount: 10,
    targetCpuUtilization: 75,
  },
});

greeterService.connectTo(nameService);
greeterService.connectTo(greetingService);

/**
 * Expectations are that you should see an output
 * of the load balancer URL for the greeter service, make
 * a request to it and see a greeting phrase constructed out
 * of a random greeting and a random name from the two underlying
 * services. The other addons enable tracing and logging which must
 * be verified separately.
 */