import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import { Container, Environment, HttpLoadBalancerExtension, Service, ServiceDescription } from '../lib';

describe('http load balancer', () => {
  test('should be able to add an HTTP load balancer to a service', () => {
    // GIVEN
    const stack = new Stack();

    // WHEN
    const environment = new Environment(stack, 'production');
    const serviceDescription = new ServiceDescription();

    serviceDescription.add(new Container({
      cpu: 256,
      memoryMiB: 512,
      trafficPort: 80,
      image: ecs.ContainerImage.fromRegistry('nathanpeck/name'),
    }));

    serviceDescription.add(new HttpLoadBalancerExtension());

    new Service(stack, 'my-service', {
      environment,
      serviceDescription,
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::ECS::TaskDefinition', {
      ContainerDefinitions: [
        {
          Cpu: 256,
          Essential: true,
          Image: 'nathanpeck/name',
          Memory: 512,
          Name: 'app',
          PortMappings: [
            {
              ContainerPort: 80,
              Protocol: 'tcp',
            },
          ],
          Ulimits: [
            {
              HardLimit: 1024000,
              Name: 'nofile',
              SoftLimit: 1024000,
            },
          ],
        },
      ],
      Cpu: '256',
      Family: 'myservicetaskdefinition',
      Memory: '512',
      NetworkMode: 'awsvpc',
      RequiresCompatibilities: [
        'EC2',
        'FARGATE',
      ],
      TaskRoleArn: {
        'Fn::GetAtt': [
          'myservicetaskdefinitionTaskRole92ACD903',
          'Arn',
        ],
      },
    });

    Template.fromStack(stack).resourceCountIs('AWS::ElasticLoadBalancingV2::LoadBalancer', 1);
    Template.fromStack(stack).resourceCountIs('AWS::ElasticLoadBalancingV2::Listener', 1);
  });

  test('allows scaling on request count for the HTTP load balancer', () => {
    // GIVEN
    const stack = new Stack();

    // WHEN
    const environment = new Environment(stack, 'production');
    const serviceDescription = new ServiceDescription();

    serviceDescription.add(new Container({
      cpu: 256,
      memoryMiB: 512,
      trafficPort: 80,
      image: ecs.ContainerImage.fromRegistry('nathanpeck/name'),
    }));

    serviceDescription.add(new HttpLoadBalancerExtension({ requestsPerTarget: 100 }));

    const service = new Service(stack, 'my-service', {
      environment,
      serviceDescription,
      autoScaleTaskCount: {
        maxTaskCount: 5,
      },
    });

    // THEN
    expect(service.targetGroup).not.toBeUndefined();
    Template.fromStack(stack).hasResourceProperties('AWS::ApplicationAutoScaling::ScalableTarget', {
      MaxCapacity: 5,
      MinCapacity: 1,
    });

    Template.fromStack(stack).hasResourceProperties('AWS::ApplicationAutoScaling::ScalingPolicy', {
      PolicyType: 'TargetTrackingScaling',
      TargetTrackingScalingPolicyConfiguration: {
        PredefinedMetricSpecification: {
          PredefinedMetricType: 'ALBRequestCountPerTarget',
        },
        TargetValue: 100,
      },
    });
  });

  test('should error when adding scaling policy if scaling target has not been configured', () => {
    // GIVEN
    const stack = new Stack();

    // WHEN
    const environment = new Environment(stack, 'production');
    const serviceDescription = new ServiceDescription();

    serviceDescription.add(new Container({
      cpu: 256,
      memoryMiB: 512,
      trafficPort: 80,
      image: ecs.ContainerImage.fromRegistry('nathanpeck/name'),
    }));

    serviceDescription.add(new HttpLoadBalancerExtension({ requestsPerTarget: 100 }));

    // THEN
    expect(() => {
      new Service(stack, 'my-service', {
        environment,
        serviceDescription,
      });
    }).toThrow(/Auto scaling target for the service 'my-service' hasn't been configured. Please use Service construct to configure 'minTaskCount' and 'maxTaskCount'./);
  });
});