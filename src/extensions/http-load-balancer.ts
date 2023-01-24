import { CfnOutput, Duration } from 'aws-cdk-lib';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as alb from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Construct } from 'constructs';
import { Service } from '../service';
import { ServiceExtension, ServiceBuild } from './extension-interfaces';

export interface HttpLoadBalancerProps {
  /**
   * The number of ALB requests per target.
   */
  readonly requestsPerTarget?: number;

  /**
   * An ACM certificate to associate with this load balancer. If specified, this
   * extension will listen over HTTPS on port 443.
   *
   * @default - undefined. The load balancer will listen on port 80 over HTTP.
   */
  readonly certificate?: acm.ICertificate;
}
/**
 * This extension add a public facing load balancer for sending traffic
 * to one or more replicas of the application container.
 */
export class HttpLoadBalancerExtension extends ServiceExtension {
  private loadBalancer!: alb.IApplicationLoadBalancer;
  private listener!: alb.IApplicationListener;
  private requestsPerTarget?: number;
  private certificate?: acm.ICertificate;

  constructor(props: HttpLoadBalancerProps = {}) {
    super('load-balancer');
    this.requestsPerTarget = props.requestsPerTarget;
    this.certificate = props.certificate;
  }

  // Before the service is created, go ahead and create the load balancer itself.
  public prehook(service: Service, scope: Construct) {
    this.parentService = service;

    this.loadBalancer = new alb.ApplicationLoadBalancer(scope, `${this.parentService.id}-load-balancer`, {
      vpc: this.parentService.vpc,
      internetFacing: true,
    });
    const protocol = this.certificate ? alb.ApplicationProtocol.HTTPS : alb.ApplicationProtocol.HTTP;
    const port = this.certificate ? 443 : 80;
    this.listener = this.loadBalancer.addListener(`${this.parentService.id}-listener`, {
      port,
      protocol,
      open: true,
    });

    if (this.certificate) {
      this.listener.addCertificates('cert', [alb.ListenerCertificate.fromCertificateManager(this.certificate)]);
      this.loadBalancer.addListener(`${this.parentService.id}-redirect-listener`, {
        protocol: alb.ApplicationProtocol.HTTP,
        port: 80,
        open: true,
        defaultAction: alb.ListenerAction.redirect({
          port: '443',
          protocol: alb.ApplicationProtocol.HTTPS,
          permanent: true,
        }),
      });
    }

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
