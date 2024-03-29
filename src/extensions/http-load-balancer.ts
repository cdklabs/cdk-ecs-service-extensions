import { CfnOutput, Duration } from 'aws-cdk-lib';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as alb from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Construct } from 'constructs';
import { ServiceExtension, ServiceBuild } from './extension-interfaces';
import { Service } from '../service';

export interface HttpLoadBalancerProps {
  /**
   * The number of ALB requests per target.
   */
  readonly requestsPerTarget?: number;
}
/**
 * This extension add a public facing load balancer for sending traffic
 * to one or more replicas of the application container.
 */
export class HttpLoadBalancerExtension extends ServiceExtension {
  private loadBalancer!: alb.IApplicationLoadBalancer;
  private listener!: alb.IApplicationListener;
  private requestsPerTarget?: number;

  constructor(props: HttpLoadBalancerProps = {}) {
    super('load-balancer');
    this.requestsPerTarget = props.requestsPerTarget;
  }

  // Before the service is created, go ahead and create the load balancer itself.
  public prehook(service: Service, scope: Construct) {
    this.parentService = service;

    this.loadBalancer = new alb.ApplicationLoadBalancer(scope, `${this.parentService.id}-load-balancer`, {
      vpc: this.parentService.vpc,
      internetFacing: true,
    });

    this.listener = this.loadBalancer.addListener(`${this.parentService.id}-listener`, {
      port: 80,
      open: true,
    });

    // Automatically create an output
    new CfnOutput(scope, `${this.parentService.id}-load-balancer-dns-output`, {
      value: this.loadBalancer.loadBalancerDnsName,
    });
  }

  // Minor service configuration tweaks to work better with a load balancer
  public modifyServiceProps(props: ServiceBuild): ServiceBuild {
    return {
      ...props,

      // Give the task a little bit of grace time to start passing
      // healthchecks. Without this it is possible for a slow starting task
      // to cause the ALB to consider the task unhealthy, causing ECS to stop
      // the task before it actually has a chance to finish starting up
      healthCheckGracePeriod: Duration.minutes(1),
    } as ServiceBuild;
  }

  // After the service is created add the service to the load balancer's listener
  public useService(service: ecs.Ec2Service | ecs.FargateService) {
    const targetGroup = this.listener.addTargets(this.parentService.id, {
      deregistrationDelay: Duration.seconds(10),
      port: 80,
      targets: [service],
    });
    this.parentService.targetGroup = targetGroup;

    if (this.requestsPerTarget) {
      if (!this.parentService.scalableTaskCount) {
        throw Error(`Auto scaling target for the service '${this.parentService.id}' hasn't been configured. Please use Service construct to configure 'minTaskCount' and 'maxTaskCount'.`);
      }
      this.parentService.scalableTaskCount.scaleOnRequestCount(`${this.parentService.id}-target-request-count-${this.requestsPerTarget}`, {
        requestsPerTarget: this.requestsPerTarget,
        targetGroup: this.parentService.targetGroup,
      });
      this.parentService.enableAutoScalingPolicy();
    }
  }
}
