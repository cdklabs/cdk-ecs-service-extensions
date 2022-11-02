import { App, Duration, Stack } from 'aws-cdk-lib';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Container, Environment, InjecterExtension, InjectableTopic, QueueExtension, Service, ServiceDescription, TopicSubscription } from '../lib';


const app = new App();
const stack = new Stack(app, 'aws-ecs-integ');

const environment = new Environment(stack, 'production');

const pubServiceDescription = new ServiceDescription();

pubServiceDescription.add(new Container({
  cpu: 256,
  memoryMiB: 512,
  trafficPort: 80,
  image: ecs.ContainerImage.fromRegistry('nathanpeck/name'),
  environment: {
    PORT: '80',
  },
}));

const topic1 = new InjectableTopic({
  topic: new sns.Topic(stack, 'sign-up'),
});

const topic2 = new InjectableTopic({
  topic: new sns.Topic(stack, 'delete'),
});

pubServiceDescription.add(new InjecterExtension({
  injectables: [topic1, topic2],
}));

new Service(stack, 'Publisher', {
  environment: environment,
  serviceDescription: pubServiceDescription,
});

const subServiceDescription = new ServiceDescription();

subServiceDescription.add(new Container({
  cpu: 256,
  memoryMiB: 512,
  trafficPort: 80,
  image: ecs.ContainerImage.fromRegistry('nathanpeck/name'),
  environment: {
    PORT: '80',
  },
}));

const topicSubscription1 = new TopicSubscription({
  topic: topic1.topic,
  topicSubscriptionQueue: {
    queue: new sqs.Queue(stack, 'sign-up-queue'),
    scaleOnLatency: {
      acceptableLatency: Duration.minutes(10),
      messageProcessingTime: Duration.seconds(20),
    },
  },
});
const topicSubscription2 = new TopicSubscription({
  topic: topic2.topic,
});

subServiceDescription.add(new QueueExtension({
  subscriptions: [topicSubscription1, topicSubscription2],
  scaleOnLatency: {
    acceptableLatency: Duration.minutes(5),
    messageProcessingTime: Duration.seconds(20),
  },
}));

new Service(stack, 'Worker', {
  environment: environment,
  serviceDescription: subServiceDescription,
  autoScaleTaskCount: {
    maxTaskCount: 10,
  },
});