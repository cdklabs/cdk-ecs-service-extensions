import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as sns from 'aws-cdk-lib/aws-sns';
import { Construct } from 'constructs';
import { Container } from './container';
import { ContainerMutatingHook, ServiceExtension } from './extension-interfaces';
import { Service } from '../service';

/**
 * An interface that will be implemented by all the resources that can be published events or written data to.
 */
export interface IInjectable {
  environmentVariables(): { [key: string]: string };
}

/**
 * An interface that will be implemented by all the injectable resources that need to grant permissions to the task role.
 */
export interface IGrantInjectable extends IInjectable {
  grant(taskDefinition: ecs.TaskDefinition): void;
}

/**
 * The settings for the `InjectableTopic` class.
 */
export interface InjectableTopicProps {
  /**
   * The SNS Topic to publish events to.
   */
  readonly topic: sns.ITopic;
}

/**
 * The `InjectableTopic` class represents SNS Topic resource that can be published events to by the parent service.
 */

export class InjectableTopic implements IGrantInjectable {
  public readonly topic: sns.ITopic;

  constructor(props: InjectableTopicProps) {
    this.topic = props.topic;
  }

  public grant(taskDefinition: ecs.TaskDefinition) {
    this.topic.grantPublish(taskDefinition.taskRole);
  }

  public environmentVariables(): { [key: string]: string } {
    let environment: { [key: string]: string } = {};
    environment[`${this.topic.node.id.toUpperCase()}_TOPIC_ARN`] = this.topic.topicArn;
    return environment;
  }
}

/**
 * The settings for the Injecter extension.
 */
export interface InjecterExtensionProps {
  /**
   * The list of injectable resources for this service.
   */
  readonly injectables: IInjectable[];
}

/**
 * Settings for the hook which mutates the application container
 * to add the injectable resource environment variables.
 */
interface ContainerMutatingProps {
  /**
   * The resource environment variables to be added to the container environment.
   */
  readonly environment: { [key: string]: string };
}

/**
 * This hook modifies the application container's environment to
 * add the injectable resource environment variables.
 */
class InjecterExtensionMutatingHook extends ContainerMutatingHook {
  private environment: { [key: string]: string };

  constructor(props: ContainerMutatingProps) {
    super();
    this.environment = props.environment;
  }

  public mutateContainerDefinition(props: ecs.ContainerDefinitionOptions): ecs.ContainerDefinitionOptions {
    return {
      ...props,

      environment: { ...(props.environment || {}), ...this.environment },
    } as ecs.ContainerDefinitionOptions;
  }
}

/**
 * This extension accepts a list of `Injectable` resources that the parent service can publish events or write data to.
 * It sets up the corresponding permissions for the task role of the parent service.
 */
export class InjecterExtension extends ServiceExtension {
  private props: InjecterExtensionProps;

  private environment: { [key: string]: string } = {};

  constructor(props: InjecterExtensionProps) {
    super('injecter');

    this.props = props;
  }

  // @ts-ignore - Ignore unused params that are required for abstract class extend
  public prehook(service: Service, scope: Construct) {
    this.parentService = service;

    for (const injectable of this.props.injectables) {
      for (const [key, val] of Object.entries(injectable.environmentVariables())) {
        this.environment[key] = val;
      }
    }
  }

  /**
   * Add hooks to the main application extension so that it is modified to
   * add the injectable resource environment variables to the container environment.
   */
  public addHooks() {
    const container = this.parentService.serviceDescription.get('service-container') as Container;

    if (!container) {
      throw new Error('Injecter Extension requires an application extension');
    }

    container.addContainerMutatingHook(new InjecterExtensionMutatingHook({
      environment: this.environment,
    }));
  }

  /**
   * After the task definition has been created, this hook grants the required permissions to the task role for the
   * parent service.
   *
   * @param taskDefinition The created task definition
   */
  public useTaskDefinition(taskDefinition: ecs.TaskDefinition) {
    for (const injectable of this.props.injectables) {
      if ((injectable as IGrantInjectable).grant !== undefined) {
        (injectable as IGrantInjectable).grant(taskDefinition);
      }
    }
  }
}