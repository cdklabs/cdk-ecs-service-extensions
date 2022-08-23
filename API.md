# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Environment <a name="Environment" id="@aws-cdk-containers/ecs-service-extensions.Environment"></a>

- *Implements:* <a href="#@aws-cdk-containers/ecs-service-extensions.IEnvironment">IEnvironment</a>

An environment into which to deploy a service.

This environment
can either be instantiated with a pre-existing AWS VPC and ECS cluster,
or it can create its own VPC and cluster. By default, it will create
a cluster with Fargate capacity.

#### Initializers <a name="Initializers" id="@aws-cdk-containers/ecs-service-extensions.Environment.Initializer"></a>

```typescript
import { Environment } from '@aws-cdk-containers/ecs-service-extensions'

new Environment(scope: Construct, id: string, props?: EnvironmentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Environment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Environment.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Environment.Initializer.parameter.props">props</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.EnvironmentProps">EnvironmentProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@aws-cdk-containers/ecs-service-extensions.Environment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@aws-cdk-containers/ecs-service-extensions.Environment.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.Environment.Initializer.parameter.props"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.EnvironmentProps">EnvironmentProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Environment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Environment.addDefaultCloudMapNamespace">addDefaultCloudMapNamespace</a></code> | Add a default cloudmap namespace to the environment's cluster. |

---

##### `toString` <a name="toString" id="@aws-cdk-containers/ecs-service-extensions.Environment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDefaultCloudMapNamespace` <a name="addDefaultCloudMapNamespace" id="@aws-cdk-containers/ecs-service-extensions.Environment.addDefaultCloudMapNamespace"></a>

```typescript
public addDefaultCloudMapNamespace(options: CloudMapNamespaceOptions): void
```

Add a default cloudmap namespace to the environment's cluster.

The environment's cluster must not be imported.

###### `options`<sup>Required</sup> <a name="options" id="@aws-cdk-containers/ecs-service-extensions.Environment.addDefaultCloudMapNamespace.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ecs.CloudMapNamespaceOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Environment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Environment.fromEnvironmentAttributes">fromEnvironmentAttributes</a></code> | Import an existing environment from its attributes. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@aws-cdk-containers/ecs-service-extensions.Environment.isConstruct"></a>

```typescript
import { Environment } from '@aws-cdk-containers/ecs-service-extensions'

Environment.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@aws-cdk-containers/ecs-service-extensions.Environment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `fromEnvironmentAttributes` <a name="fromEnvironmentAttributes" id="@aws-cdk-containers/ecs-service-extensions.Environment.fromEnvironmentAttributes"></a>

```typescript
import { Environment } from '@aws-cdk-containers/ecs-service-extensions'

Environment.fromEnvironmentAttributes(scope: Construct, id: string, attrs: EnvironmentAttributes)
```

Import an existing environment from its attributes.

###### `scope`<sup>Required</sup> <a name="scope" id="@aws-cdk-containers/ecs-service-extensions.Environment.fromEnvironmentAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@aws-cdk-containers/ecs-service-extensions.Environment.fromEnvironmentAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@aws-cdk-containers/ecs-service-extensions.Environment.fromEnvironmentAttributes.parameter.attrs"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.EnvironmentAttributes">EnvironmentAttributes</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Environment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Environment.property.capacityType">capacityType</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.EnvironmentCapacityType">EnvironmentCapacityType</a></code> | The capacity type used by the service's cluster. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Environment.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | The cluster that is providing capacity for this service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Environment.property.id">id</a></code> | <code>string</code> | The name of this environment. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Environment.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where environment services should be placed. |

---

##### `node`<sup>Required</sup> <a name="node" id="@aws-cdk-containers/ecs-service-extensions.Environment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `capacityType`<sup>Required</sup> <a name="capacityType" id="@aws-cdk-containers/ecs-service-extensions.Environment.property.capacityType"></a>

```typescript
public readonly capacityType: EnvironmentCapacityType;
```

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.EnvironmentCapacityType">EnvironmentCapacityType</a>

The capacity type used by the service's cluster.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@aws-cdk-containers/ecs-service-extensions.Environment.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster

The cluster that is providing capacity for this service.

---

##### `id`<sup>Required</sup> <a name="id" id="@aws-cdk-containers/ecs-service-extensions.Environment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The name of this environment.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@aws-cdk-containers/ecs-service-extensions.Environment.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC where environment services should be placed.

---


### ImportedEnvironment <a name="ImportedEnvironment" id="@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment"></a>

- *Implements:* <a href="#@aws-cdk-containers/ecs-service-extensions.IEnvironment">IEnvironment</a>

#### Initializers <a name="Initializers" id="@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.Initializer"></a>

```typescript
import { ImportedEnvironment } from '@aws-cdk-containers/ecs-service-extensions'

new ImportedEnvironment(scope: Construct, id: string, props: EnvironmentAttributes)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.Initializer.parameter.props">props</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.EnvironmentAttributes">EnvironmentAttributes</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.Initializer.parameter.props"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.EnvironmentAttributes">EnvironmentAttributes</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.addDefaultCloudMapNamespace">addDefaultCloudMapNamespace</a></code> | Adding a default cloudmap namespace to the cluster will throw an error, as we don't own it. |

---

##### `toString` <a name="toString" id="@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDefaultCloudMapNamespace` <a name="addDefaultCloudMapNamespace" id="@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.addDefaultCloudMapNamespace"></a>

```typescript
public addDefaultCloudMapNamespace(_options: CloudMapNamespaceOptions): void
```

Adding a default cloudmap namespace to the cluster will throw an error, as we don't own it.

###### `_options`<sup>Required</sup> <a name="_options" id="@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.addDefaultCloudMapNamespace.parameter._options"></a>

- *Type:* aws-cdk-lib.aws_ecs.CloudMapNamespaceOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.isConstruct"></a>

```typescript
import { ImportedEnvironment } from '@aws-cdk-containers/ecs-service-extensions'

ImportedEnvironment.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.property.capacityType">capacityType</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.EnvironmentCapacityType">EnvironmentCapacityType</a></code> | The capacity type used by the service's cluster. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | The cluster that is providing capacity for this service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.property.id">id</a></code> | <code>string</code> | The name of this environment. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC into which environment services should be placed. |

---

##### `node`<sup>Required</sup> <a name="node" id="@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `capacityType`<sup>Required</sup> <a name="capacityType" id="@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.property.capacityType"></a>

```typescript
public readonly capacityType: EnvironmentCapacityType;
```

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.EnvironmentCapacityType">EnvironmentCapacityType</a>

The capacity type used by the service's cluster.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster

The cluster that is providing capacity for this service.

---

##### `id`<sup>Required</sup> <a name="id" id="@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The name of this environment.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC into which environment services should be placed.

---


### Service <a name="Service" id="@aws-cdk-containers/ecs-service-extensions.Service"></a>

This Service construct serves as a Builder class for an ECS service.

It
supports various extensions and keeps track of any mutating state, allowing
it to build up an ECS service progressively.

#### Initializers <a name="Initializers" id="@aws-cdk-containers/ecs-service-extensions.Service.Initializer"></a>

```typescript
import { Service } from '@aws-cdk-containers/ecs-service-extensions'

new Service(scope: Construct, id: string, props: ServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Service.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Service.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Service.Initializer.parameter.props">props</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceProps">ServiceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@aws-cdk-containers/ecs-service-extensions.Service.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@aws-cdk-containers/ecs-service-extensions.Service.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.Service.Initializer.parameter.props"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ServiceProps">ServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Service.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Service.addURL">addURL</a></code> | This method adds a new URL for the service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Service.connectTo">connectTo</a></code> | Tell extensions from one service to connect to extensions from another sevice if they have implemented a hook for it. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Service.enableAutoScalingPolicy">enableAutoScalingPolicy</a></code> | This helper method is used to set the `autoScalingPoliciesEnabled` attribute whenever an auto scaling policy is configured for the service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Service.getURL">getURL</a></code> | Retrieve a URL for the service. |

---

##### `toString` <a name="toString" id="@aws-cdk-containers/ecs-service-extensions.Service.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addURL` <a name="addURL" id="@aws-cdk-containers/ecs-service-extensions.Service.addURL"></a>

```typescript
public addURL(urlName: string, url: string): void
```

This method adds a new URL for the service.

This allows extensions to
submit a URL for the service. For example, a load balancer might add its
URL, or App Mesh can add its DNS name for the service.

###### `urlName`<sup>Required</sup> <a name="urlName" id="@aws-cdk-containers/ecs-service-extensions.Service.addURL.parameter.urlName"></a>

- *Type:* string

The identifier name for this URL.

---

###### `url`<sup>Required</sup> <a name="url" id="@aws-cdk-containers/ecs-service-extensions.Service.addURL.parameter.url"></a>

- *Type:* string

The URL itself.

---

##### `connectTo` <a name="connectTo" id="@aws-cdk-containers/ecs-service-extensions.Service.connectTo"></a>

```typescript
public connectTo(service: Service, connectToProps?: ConnectToProps): void
```

Tell extensions from one service to connect to extensions from another sevice if they have implemented a hook for it.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.Service.connectTo.parameter.service"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a>

---

###### `connectToProps`<sup>Optional</sup> <a name="connectToProps" id="@aws-cdk-containers/ecs-service-extensions.Service.connectTo.parameter.connectToProps"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ConnectToProps">ConnectToProps</a>

---

##### `enableAutoScalingPolicy` <a name="enableAutoScalingPolicy" id="@aws-cdk-containers/ecs-service-extensions.Service.enableAutoScalingPolicy"></a>

```typescript
public enableAutoScalingPolicy(): void
```

This helper method is used to set the `autoScalingPoliciesEnabled` attribute whenever an auto scaling policy is configured for the service.

##### `getURL` <a name="getURL" id="@aws-cdk-containers/ecs-service-extensions.Service.getURL"></a>

```typescript
public getURL(urlName: string): string
```

Retrieve a URL for the service.

The URL must have previously been
stored by one of the URL providing extensions.

###### `urlName`<sup>Required</sup> <a name="urlName" id="@aws-cdk-containers/ecs-service-extensions.Service.getURL.parameter.urlName"></a>

- *Type:* string

The URL to look up.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Service.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@aws-cdk-containers/ecs-service-extensions.Service.isConstruct"></a>

```typescript
import { Service } from '@aws-cdk-containers/ecs-service-extensions'

Service.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@aws-cdk-containers/ecs-service-extensions.Service.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Service.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Service.property.capacityType">capacityType</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.EnvironmentCapacityType">EnvironmentCapacityType</a></code> | The capacity type that this service will use. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Service.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | The cluster that is providing capacity for this service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Service.property.environment">environment</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.IEnvironment">IEnvironment</a></code> | The environment where this service was launched. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Service.property.id">id</a></code> | <code>string</code> | The name of the service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Service.property.serviceDescription">serviceDescription</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceDescription">ServiceDescription</a></code> | The ServiceDescription used to build this service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Service.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where this service should be placed. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Service.property.scalableTaskCount">scalableTaskCount</a></code> | <code>aws-cdk-lib.aws_ecs.ScalableTaskCount</code> | The scalable attribute representing task count. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Service.property.ecsService">ecsService</a></code> | <code>aws-cdk-lib.aws_ecs.Ec2Service \| aws-cdk-lib.aws_ecs.FargateService</code> | The underlying ECS service that was created. |

---

##### `node`<sup>Required</sup> <a name="node" id="@aws-cdk-containers/ecs-service-extensions.Service.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `capacityType`<sup>Required</sup> <a name="capacityType" id="@aws-cdk-containers/ecs-service-extensions.Service.property.capacityType"></a>

```typescript
public readonly capacityType: EnvironmentCapacityType;
```

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.EnvironmentCapacityType">EnvironmentCapacityType</a>

The capacity type that this service will use.

Valid values are EC2 or FARGATE.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@aws-cdk-containers/ecs-service-extensions.Service.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster

The cluster that is providing capacity for this service.

[disable-awslint:ref-via-interface]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@aws-cdk-containers/ecs-service-extensions.Service.property.environment"></a>

```typescript
public readonly environment: IEnvironment;
```

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.IEnvironment">IEnvironment</a>

The environment where this service was launched.

---

##### `id`<sup>Required</sup> <a name="id" id="@aws-cdk-containers/ecs-service-extensions.Service.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The name of the service.

---

##### `serviceDescription`<sup>Required</sup> <a name="serviceDescription" id="@aws-cdk-containers/ecs-service-extensions.Service.property.serviceDescription"></a>

```typescript
public readonly serviceDescription: ServiceDescription;
```

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ServiceDescription">ServiceDescription</a>

The ServiceDescription used to build this service.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@aws-cdk-containers/ecs-service-extensions.Service.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC where this service should be placed.

---

##### `scalableTaskCount`<sup>Optional</sup> <a name="scalableTaskCount" id="@aws-cdk-containers/ecs-service-extensions.Service.property.scalableTaskCount"></a>

```typescript
public readonly scalableTaskCount: ScalableTaskCount;
```

- *Type:* aws-cdk-lib.aws_ecs.ScalableTaskCount

The scalable attribute representing task count.

---

##### `ecsService`<sup>Required</sup> <a name="ecsService" id="@aws-cdk-containers/ecs-service-extensions.Service.property.ecsService"></a>

```typescript
public readonly ecsService: Ec2Service | FargateService;
```

- *Type:* aws-cdk-lib.aws_ecs.Ec2Service | aws-cdk-lib.aws_ecs.FargateService

The underlying ECS service that was created.

---


## Structs <a name="Structs" id="Structs"></a>

### AssignPublicIpDnsOptions <a name="AssignPublicIpDnsOptions" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpDnsOptions"></a>

#### Initializer <a name="Initializer" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpDnsOptions.Initializer"></a>

```typescript
import { AssignPublicIpDnsOptions } from '@aws-cdk-containers/ecs-service-extensions'

const assignPublicIpDnsOptions: AssignPublicIpDnsOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AssignPublicIpDnsOptions.property.recordName">recordName</a></code> | <code>string</code> | Name of the record to add to the zone and in which to add the task IP addresses to. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AssignPublicIpDnsOptions.property.zone">zone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | A DNS Zone to expose task IPs in. |

---

##### `recordName`<sup>Required</sup> <a name="recordName" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpDnsOptions.property.recordName"></a>

```typescript
public readonly recordName: string;
```

- *Type:* string

Name of the record to add to the zone and in which to add the task IP addresses to.

---

*Example*

```typescript
'myservice'
```


##### `zone`<sup>Required</sup> <a name="zone" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpDnsOptions.property.zone"></a>

```typescript
public readonly zone: IHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.IHostedZone

A DNS Zone to expose task IPs in.

---

### AssignPublicIpExtensionOptions <a name="AssignPublicIpExtensionOptions" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtensionOptions"></a>

#### Initializer <a name="Initializer" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtensionOptions.Initializer"></a>

```typescript
import { AssignPublicIpExtensionOptions } from '@aws-cdk-containers/ecs-service-extensions'

const assignPublicIpExtensionOptions: AssignPublicIpExtensionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtensionOptions.property.dns">dns</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.AssignPublicIpDnsOptions">AssignPublicIpDnsOptions</a></code> | Enable publishing task public IPs to a recordset in a Route 53 hosted zone. |

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtensionOptions.property.dns"></a>

```typescript
public readonly dns: AssignPublicIpDnsOptions;
```

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.AssignPublicIpDnsOptions">AssignPublicIpDnsOptions</a>

Enable publishing task public IPs to a recordset in a Route 53 hosted zone.

Note: If you want to change the DNS zone or record name, you will need to
remove this extension completely and then re-add it.

---

### AutoScalingOptions <a name="AutoScalingOptions" id="@aws-cdk-containers/ecs-service-extensions.AutoScalingOptions"></a>

#### Initializer <a name="Initializer" id="@aws-cdk-containers/ecs-service-extensions.AutoScalingOptions.Initializer"></a>

```typescript
import { AutoScalingOptions } from '@aws-cdk-containers/ecs-service-extensions'

const autoScalingOptions: AutoScalingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AutoScalingOptions.property.maxTaskCount">maxTaskCount</a></code> | <code>number</code> | The maximum number of tasks when scaling out. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AutoScalingOptions.property.minTaskCount">minTaskCount</a></code> | <code>number</code> | The minimum number of tasks when scaling in. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AutoScalingOptions.property.targetCpuUtilization">targetCpuUtilization</a></code> | <code>number</code> | The target value for CPU utilization across all tasks in the service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AutoScalingOptions.property.targetMemoryUtilization">targetMemoryUtilization</a></code> | <code>number</code> | The target value for memory utilization across all tasks in the service. |

---

##### `maxTaskCount`<sup>Required</sup> <a name="maxTaskCount" id="@aws-cdk-containers/ecs-service-extensions.AutoScalingOptions.property.maxTaskCount"></a>

```typescript
public readonly maxTaskCount: number;
```

- *Type:* number

The maximum number of tasks when scaling out.

---

##### `minTaskCount`<sup>Optional</sup> <a name="minTaskCount" id="@aws-cdk-containers/ecs-service-extensions.AutoScalingOptions.property.minTaskCount"></a>

```typescript
public readonly minTaskCount: number;
```

- *Type:* number
- *Default:* 1

The minimum number of tasks when scaling in.

---

##### `targetCpuUtilization`<sup>Optional</sup> <a name="targetCpuUtilization" id="@aws-cdk-containers/ecs-service-extensions.AutoScalingOptions.property.targetCpuUtilization"></a>

```typescript
public readonly targetCpuUtilization: number;
```

- *Type:* number

The target value for CPU utilization across all tasks in the service.

---

##### `targetMemoryUtilization`<sup>Optional</sup> <a name="targetMemoryUtilization" id="@aws-cdk-containers/ecs-service-extensions.AutoScalingOptions.property.targetMemoryUtilization"></a>

```typescript
public readonly targetMemoryUtilization: number;
```

- *Type:* number

The target value for memory utilization across all tasks in the service.

---

### ConnectToProps <a name="ConnectToProps" id="@aws-cdk-containers/ecs-service-extensions.ConnectToProps"></a>

connectToProps will have all the extra parameters which are required for connecting services.

#### Initializer <a name="Initializer" id="@aws-cdk-containers/ecs-service-extensions.ConnectToProps.Initializer"></a>

```typescript
import { ConnectToProps } from '@aws-cdk-containers/ecs-service-extensions'

const connectToProps: ConnectToProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ConnectToProps.property.localBindPort">localBindPort</a></code> | <code>number</code> | localBindPort is the local port that this application should use when calling the upstream service in ECS Consul Mesh Extension Currently, this parameter will only be used in the ECSConsulMeshExtension https://github.com/aws-ia/ecs-consul-mesh-extension. |

---

##### `localBindPort`<sup>Optional</sup> <a name="localBindPort" id="@aws-cdk-containers/ecs-service-extensions.ConnectToProps.property.localBindPort"></a>

```typescript
public readonly localBindPort: number;
```

- *Type:* number

localBindPort is the local port that this application should use when calling the upstream service in ECS Consul Mesh Extension Currently, this parameter will only be used in the ECSConsulMeshExtension https://github.com/aws-ia/ecs-consul-mesh-extension.

---

### ContainerExtensionProps <a name="ContainerExtensionProps" id="@aws-cdk-containers/ecs-service-extensions.ContainerExtensionProps"></a>

Setting for the main application container of a service.

#### Initializer <a name="Initializer" id="@aws-cdk-containers/ecs-service-extensions.ContainerExtensionProps.Initializer"></a>

```typescript
import { ContainerExtensionProps } from '@aws-cdk-containers/ecs-service-extensions'

const containerExtensionProps: ContainerExtensionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ContainerExtensionProps.property.cpu">cpu</a></code> | <code>number</code> | How much CPU the container requires. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ContainerExtensionProps.property.image">image</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerImage</code> | The image to run. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ContainerExtensionProps.property.memoryMiB">memoryMiB</a></code> | <code>number</code> | How much memory in megabytes the container requires. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ContainerExtensionProps.property.trafficPort">trafficPort</a></code> | <code>number</code> | What port the image listen for traffic on. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ContainerExtensionProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Environment variables to pass into the container. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ContainerExtensionProps.property.environmentFiles">environmentFiles</a></code> | <code>aws-cdk-lib.aws_ecs.EnvironmentFile[]</code> | The environment files to pass to the container. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ContainerExtensionProps.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The log group into which application container logs should be routed. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ContainerExtensionProps.property.secrets">secrets</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_ecs.Secret}</code> | The secret environment variables to pass to the container. |

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@aws-cdk-containers/ecs-service-extensions.ContainerExtensionProps.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

How much CPU the container requires.

---

##### `image`<sup>Required</sup> <a name="image" id="@aws-cdk-containers/ecs-service-extensions.ContainerExtensionProps.property.image"></a>

```typescript
public readonly image: ContainerImage;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerImage

The image to run.

---

##### `memoryMiB`<sup>Required</sup> <a name="memoryMiB" id="@aws-cdk-containers/ecs-service-extensions.ContainerExtensionProps.property.memoryMiB"></a>

```typescript
public readonly memoryMiB: number;
```

- *Type:* number

How much memory in megabytes the container requires.

---

##### `trafficPort`<sup>Required</sup> <a name="trafficPort" id="@aws-cdk-containers/ecs-service-extensions.ContainerExtensionProps.property.trafficPort"></a>

```typescript
public readonly trafficPort: number;
```

- *Type:* number

What port the image listen for traffic on.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@aws-cdk-containers/ecs-service-extensions.ContainerExtensionProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No environment variables.

Environment variables to pass into the container.

---

##### `environmentFiles`<sup>Optional</sup> <a name="environmentFiles" id="@aws-cdk-containers/ecs-service-extensions.ContainerExtensionProps.property.environmentFiles"></a>

```typescript
public readonly environmentFiles: EnvironmentFile[];
```

- *Type:* aws-cdk-lib.aws_ecs.EnvironmentFile[]
- *Default:* No environment files.

The environment files to pass to the container.

> [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html)

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@aws-cdk-containers/ecs-service-extensions.ContainerExtensionProps.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup
- *Default:* A log group is automatically created for you if the `ECS_SERVICE_EXTENSIONS_ENABLE_DEFAULT_LOG_DRIVER` feature flag is set.

The log group into which application container logs should be routed.

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@aws-cdk-containers/ecs-service-extensions.ContainerExtensionProps.property.secrets"></a>

```typescript
public readonly secrets: {[ key: string ]: Secret};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_ecs.Secret}
- *Default:* No secret environment variables.

The secret environment variables to pass to the container.

---

### CpuScalingProps <a name="CpuScalingProps" id="@aws-cdk-containers/ecs-service-extensions.CpuScalingProps"></a>

The autoscaling settings.

#### Initializer <a name="Initializer" id="@aws-cdk-containers/ecs-service-extensions.CpuScalingProps.Initializer"></a>

```typescript
import { CpuScalingProps } from '@aws-cdk-containers/ecs-service-extensions'

const cpuScalingProps: CpuScalingProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.CpuScalingProps.property.initialTaskCount">initialTaskCount</a></code> | <code>number</code> | How many tasks to launch initially. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.CpuScalingProps.property.maxTaskCount">maxTaskCount</a></code> | <code>number</code> | The maximum number of tasks when scaling out. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.CpuScalingProps.property.minTaskCount">minTaskCount</a></code> | <code>number</code> | The minimum number of tasks when scaling in. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.CpuScalingProps.property.scaleInCooldown">scaleInCooldown</a></code> | <code>aws-cdk-lib.Duration</code> | How long to wait between scale in actions. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.CpuScalingProps.property.scaleOutCooldown">scaleOutCooldown</a></code> | <code>aws-cdk-lib.Duration</code> | How long to wait between scale out actions. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.CpuScalingProps.property.targetCpuUtilization">targetCpuUtilization</a></code> | <code>number</code> | The CPU utilization to try ot maintain. |

---

##### ~~`initialTaskCount`~~<sup>Optional</sup> <a name="initialTaskCount" id="@aws-cdk-containers/ecs-service-extensions.CpuScalingProps.property.initialTaskCount"></a>

- *Deprecated:* use the `minTaskCount` and `maxTaskCount` properties of `autoScaleTaskCount` in the `Service` construct
to configure the auto scaling target for the service. For more information, please refer
https://github.com/aws/aws-cdk/blob/master/packages/%40aws-cdk-containers/ecs-service-extensions/README.md#task-auto-scaling .

```typescript
public readonly initialTaskCount: number;
```

- *Type:* number
- *Default:* 2

How many tasks to launch initially.

---

##### ~~`maxTaskCount`~~<sup>Optional</sup> <a name="maxTaskCount" id="@aws-cdk-containers/ecs-service-extensions.CpuScalingProps.property.maxTaskCount"></a>

- *Deprecated:* use the `minTaskCount` and `maxTaskCount` properties of `autoScaleTaskCount` in the `Service` construct
to configure the auto scaling target for the service. For more information, please refer
https://github.com/aws/aws-cdk/blob/master/packages/%40aws-cdk-containers/ecs-service-extensions/README.md#task-auto-scaling .

```typescript
public readonly maxTaskCount: number;
```

- *Type:* number
- *Default:* 8

The maximum number of tasks when scaling out.

---

##### ~~`minTaskCount`~~<sup>Optional</sup> <a name="minTaskCount" id="@aws-cdk-containers/ecs-service-extensions.CpuScalingProps.property.minTaskCount"></a>

- *Deprecated:* use the `minTaskCount` and `maxTaskCount` properties of `autoScaleTaskCount` in the `Service` construct
to configure the auto scaling target for the service. For more information, please refer
https://github.com/aws/aws-cdk/blob/master/packages/%40aws-cdk-containers/ecs-service-extensions/README.md#task-auto-scaling .

```typescript
public readonly minTaskCount: number;
```

- *Type:* number
- *Default:* 2

The minimum number of tasks when scaling in.

---

##### ~~`scaleInCooldown`~~<sup>Optional</sup> <a name="scaleInCooldown" id="@aws-cdk-containers/ecs-service-extensions.CpuScalingProps.property.scaleInCooldown"></a>

- *Deprecated:* use the `minTaskCount` and `maxTaskCount` properties of `autoScaleTaskCount` in the `Service` construct
to configure the auto scaling target for the service. For more information, please refer
https://github.com/aws/aws-cdk/blob/master/packages/%40aws-cdk-containers/ecs-service-extensions/README.md#task-auto-scaling .

```typescript
public readonly scaleInCooldown: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 60 seconds

How long to wait between scale in actions.

---

##### ~~`scaleOutCooldown`~~<sup>Optional</sup> <a name="scaleOutCooldown" id="@aws-cdk-containers/ecs-service-extensions.CpuScalingProps.property.scaleOutCooldown"></a>

- *Deprecated:* use the `minTaskCount` and `maxTaskCount` properties of `autoScaleTaskCount` in the `Service` construct
to configure the auto scaling target for the service. For more information, please refer
https://github.com/aws/aws-cdk/blob/master/packages/%40aws-cdk-containers/ecs-service-extensions/README.md#task-auto-scaling .

```typescript
public readonly scaleOutCooldown: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 60 seconds

How long to wait between scale out actions.

---

##### ~~`targetCpuUtilization`~~<sup>Optional</sup> <a name="targetCpuUtilization" id="@aws-cdk-containers/ecs-service-extensions.CpuScalingProps.property.targetCpuUtilization"></a>

- *Deprecated:* use the `minTaskCount` and `maxTaskCount` properties of `autoScaleTaskCount` in the `Service` construct
to configure the auto scaling target for the service. For more information, please refer
https://github.com/aws/aws-cdk/blob/master/packages/%40aws-cdk-containers/ecs-service-extensions/README.md#task-auto-scaling .

```typescript
public readonly targetCpuUtilization: number;
```

- *Type:* number
- *Default:* 50%

The CPU utilization to try ot maintain.

---

### EnvironmentAttributes <a name="EnvironmentAttributes" id="@aws-cdk-containers/ecs-service-extensions.EnvironmentAttributes"></a>

#### Initializer <a name="Initializer" id="@aws-cdk-containers/ecs-service-extensions.EnvironmentAttributes.Initializer"></a>

```typescript
import { EnvironmentAttributes } from '@aws-cdk-containers/ecs-service-extensions'

const environmentAttributes: EnvironmentAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.EnvironmentAttributes.property.capacityType">capacityType</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.EnvironmentCapacityType">EnvironmentCapacityType</a></code> | The capacity type used by the service's cluster. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.EnvironmentAttributes.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | The cluster that is providing capacity for this service. |

---

##### `capacityType`<sup>Required</sup> <a name="capacityType" id="@aws-cdk-containers/ecs-service-extensions.EnvironmentAttributes.property.capacityType"></a>

```typescript
public readonly capacityType: EnvironmentCapacityType;
```

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.EnvironmentCapacityType">EnvironmentCapacityType</a>

The capacity type used by the service's cluster.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@aws-cdk-containers/ecs-service-extensions.EnvironmentAttributes.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster

The cluster that is providing capacity for this service.

---

### EnvironmentProps <a name="EnvironmentProps" id="@aws-cdk-containers/ecs-service-extensions.EnvironmentProps"></a>

Settings for the environment where you want to deploy your services.

#### Initializer <a name="Initializer" id="@aws-cdk-containers/ecs-service-extensions.EnvironmentProps.Initializer"></a>

```typescript
import { EnvironmentProps } from '@aws-cdk-containers/ecs-service-extensions'

const environmentProps: EnvironmentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.EnvironmentProps.property.capacityType">capacityType</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.EnvironmentCapacityType">EnvironmentCapacityType</a></code> | The type of capacity to use for this environment. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.EnvironmentProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.Cluster</code> | The ECS cluster which provides compute capacity to this service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.EnvironmentProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC used by the service for networking. |

---

##### `capacityType`<sup>Optional</sup> <a name="capacityType" id="@aws-cdk-containers/ecs-service-extensions.EnvironmentProps.property.capacityType"></a>

```typescript
public readonly capacityType: EnvironmentCapacityType;
```

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.EnvironmentCapacityType">EnvironmentCapacityType</a>
- *Default:* EnvironmentCapacityType.FARGATE

The type of capacity to use for this environment.

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@aws-cdk-containers/ecs-service-extensions.EnvironmentProps.property.cluster"></a>

```typescript
public readonly cluster: Cluster;
```

- *Type:* aws-cdk-lib.aws_ecs.Cluster
- *Default:* Create a new cluster

The ECS cluster which provides compute capacity to this service.

[disable-awslint:ref-via-interface]

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@aws-cdk-containers/ecs-service-extensions.EnvironmentProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* Create a new VPC

The VPC used by the service for networking.

---

### FirelensProps <a name="FirelensProps" id="@aws-cdk-containers/ecs-service-extensions.FirelensProps"></a>

Settings for the hook which mutates the application container to route logs through FireLens.

#### Initializer <a name="Initializer" id="@aws-cdk-containers/ecs-service-extensions.FirelensProps.Initializer"></a>

```typescript
import { FirelensProps } from '@aws-cdk-containers/ecs-service-extensions'

const firelensProps: FirelensProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.FirelensProps.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.LogGroup</code> | The log group into which logs should be routed. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.FirelensProps.property.parentService">parentService</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a></code> | The parent service that is being mutated. |

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@aws-cdk-containers/ecs-service-extensions.FirelensProps.property.logGroup"></a>

```typescript
public readonly logGroup: LogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.LogGroup

The log group into which logs should be routed.

---

##### `parentService`<sup>Required</sup> <a name="parentService" id="@aws-cdk-containers/ecs-service-extensions.FirelensProps.property.parentService"></a>

```typescript
public readonly parentService: Service;
```

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a>

The parent service that is being mutated.

---

### HttpLoadBalancerProps <a name="HttpLoadBalancerProps" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerProps"></a>

#### Initializer <a name="Initializer" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerProps.Initializer"></a>

```typescript
import { HttpLoadBalancerProps } from '@aws-cdk-containers/ecs-service-extensions'

const httpLoadBalancerProps: HttpLoadBalancerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerProps.property.requestsPerTarget">requestsPerTarget</a></code> | <code>number</code> | The number of ALB requests per target. |

---

##### `requestsPerTarget`<sup>Optional</sup> <a name="requestsPerTarget" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerProps.property.requestsPerTarget"></a>

```typescript
public readonly requestsPerTarget: number;
```

- *Type:* number

The number of ALB requests per target.

---

### InjectableTopicProps <a name="InjectableTopicProps" id="@aws-cdk-containers/ecs-service-extensions.InjectableTopicProps"></a>

The settings for the `InjectableTopic` class.

#### Initializer <a name="Initializer" id="@aws-cdk-containers/ecs-service-extensions.InjectableTopicProps.Initializer"></a>

```typescript
import { InjectableTopicProps } from '@aws-cdk-containers/ecs-service-extensions'

const injectableTopicProps: InjectableTopicProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.InjectableTopicProps.property.topic">topic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The SNS Topic to publish events to. |

---

##### `topic`<sup>Required</sup> <a name="topic" id="@aws-cdk-containers/ecs-service-extensions.InjectableTopicProps.property.topic"></a>

```typescript
public readonly topic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic

The SNS Topic to publish events to.

---

### InjecterExtensionProps <a name="InjecterExtensionProps" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtensionProps"></a>

The settings for the Injecter extension.

#### Initializer <a name="Initializer" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtensionProps.Initializer"></a>

```typescript
import { InjecterExtensionProps } from '@aws-cdk-containers/ecs-service-extensions'

const injecterExtensionProps: InjecterExtensionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.InjecterExtensionProps.property.injectables">injectables</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.IInjectable">IInjectable</a>[]</code> | The list of injectable resources for this service. |

---

##### `injectables`<sup>Required</sup> <a name="injectables" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtensionProps.property.injectables"></a>

```typescript
public readonly injectables: IInjectable[];
```

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.IInjectable">IInjectable</a>[]

The list of injectable resources for this service.

---

### MeshProps <a name="MeshProps" id="@aws-cdk-containers/ecs-service-extensions.MeshProps"></a>

The settings for the App Mesh extension.

#### Initializer <a name="Initializer" id="@aws-cdk-containers/ecs-service-extensions.MeshProps.Initializer"></a>

```typescript
import { MeshProps } from '@aws-cdk-containers/ecs-service-extensions'

const meshProps: MeshProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.MeshProps.property.mesh">mesh</a></code> | <code>aws-cdk-lib.aws_appmesh.Mesh</code> | The service mesh into which to register the service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.MeshProps.property.protocol">protocol</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.Protocol">Protocol</a></code> | The protocol of the service. |

---

##### `mesh`<sup>Required</sup> <a name="mesh" id="@aws-cdk-containers/ecs-service-extensions.MeshProps.property.mesh"></a>

```typescript
public readonly mesh: Mesh;
```

- *Type:* aws-cdk-lib.aws_appmesh.Mesh

The service mesh into which to register the service.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@aws-cdk-containers/ecs-service-extensions.MeshProps.property.protocol"></a>

```typescript
public readonly protocol: Protocol;
```

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Protocol">Protocol</a>
- *Default:* Protocol.HTTP

The protocol of the service.

Valid values are Protocol.HTTP, Protocol.HTTP2, Protocol.TCP, Protocol.GRPC

---

### QueueAutoScalingOptions <a name="QueueAutoScalingOptions" id="@aws-cdk-containers/ecs-service-extensions.QueueAutoScalingOptions"></a>

Options for configuring SQS Queue auto scaling.

#### Initializer <a name="Initializer" id="@aws-cdk-containers/ecs-service-extensions.QueueAutoScalingOptions.Initializer"></a>

```typescript
import { QueueAutoScalingOptions } from '@aws-cdk-containers/ecs-service-extensions'

const queueAutoScalingOptions: QueueAutoScalingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.QueueAutoScalingOptions.property.acceptableLatency">acceptableLatency</a></code> | <code>aws-cdk-lib.Duration</code> | Acceptable amount of time a message can sit in the queue (including the time required to process it). |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.QueueAutoScalingOptions.property.messageProcessingTime">messageProcessingTime</a></code> | <code>aws-cdk-lib.Duration</code> | Average amount of time for processing a single message in the queue. |

---

##### `acceptableLatency`<sup>Required</sup> <a name="acceptableLatency" id="@aws-cdk-containers/ecs-service-extensions.QueueAutoScalingOptions.property.acceptableLatency"></a>

```typescript
public readonly acceptableLatency: Duration;
```

- *Type:* aws-cdk-lib.Duration

Acceptable amount of time a message can sit in the queue (including the time required to process it).

---

##### `messageProcessingTime`<sup>Required</sup> <a name="messageProcessingTime" id="@aws-cdk-containers/ecs-service-extensions.QueueAutoScalingOptions.property.messageProcessingTime"></a>

```typescript
public readonly messageProcessingTime: Duration;
```

- *Type:* aws-cdk-lib.Duration

Average amount of time for processing a single message in the queue.

---

### QueueExtensionProps <a name="QueueExtensionProps" id="@aws-cdk-containers/ecs-service-extensions.QueueExtensionProps"></a>

The settings for the Queue extension.

#### Initializer <a name="Initializer" id="@aws-cdk-containers/ecs-service-extensions.QueueExtensionProps.Initializer"></a>

```typescript
import { QueueExtensionProps } from '@aws-cdk-containers/ecs-service-extensions'

const queueExtensionProps: QueueExtensionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.QueueExtensionProps.property.eventsQueue">eventsQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The user-provided default queue for this service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.QueueExtensionProps.property.scaleOnLatency">scaleOnLatency</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.QueueAutoScalingOptions">QueueAutoScalingOptions</a></code> | The user-provided queue delay fields to configure auto scaling for the default queue. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.QueueExtensionProps.property.subscriptions">subscriptions</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.ISubscribable">ISubscribable</a>[]</code> | The list of subscriptions for this service. |

---

##### `eventsQueue`<sup>Optional</sup> <a name="eventsQueue" id="@aws-cdk-containers/ecs-service-extensions.QueueExtensionProps.property.eventsQueue"></a>

```typescript
public readonly eventsQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue
- *Default:* none

The user-provided default queue for this service.

If the `eventsQueue` is not provided, a default SQS Queue is created for the service.

---

##### `scaleOnLatency`<sup>Optional</sup> <a name="scaleOnLatency" id="@aws-cdk-containers/ecs-service-extensions.QueueExtensionProps.property.scaleOnLatency"></a>

```typescript
public readonly scaleOnLatency: QueueAutoScalingOptions;
```

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.QueueAutoScalingOptions">QueueAutoScalingOptions</a>
- *Default:* none

The user-provided queue delay fields to configure auto scaling for the default queue.

---

##### `subscriptions`<sup>Optional</sup> <a name="subscriptions" id="@aws-cdk-containers/ecs-service-extensions.QueueExtensionProps.property.subscriptions"></a>

```typescript
public readonly subscriptions: ISubscribable[];
```

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ISubscribable">ISubscribable</a>[]
- *Default:* none

The list of subscriptions for this service.

---

### ServiceBuild <a name="ServiceBuild" id="@aws-cdk-containers/ecs-service-extensions.ServiceBuild"></a>

A set of mutable service props in the process of being assembled using a builder pattern.

They will eventually to be translated into an
ecs.Ec2ServiceProps or ecs.FargateServiceProps interface, depending on the
environment's capacity type.

#### Initializer <a name="Initializer" id="@aws-cdk-containers/ecs-service-extensions.ServiceBuild.Initializer"></a>

```typescript
import { ServiceBuild } from '@aws-cdk-containers/ecs-service-extensions'

const serviceBuild: ServiceBuild = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceBuild.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | The cluster in which to launch the service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceBuild.property.taskDefinition">taskDefinition</a></code> | <code>aws-cdk-lib.aws_ecs.TaskDefinition</code> | The task definition registered to this service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceBuild.property.assignPublicIp">assignPublicIp</a></code> | <code>boolean</code> | Specifies whether the task's elastic network interface receives a public IP address. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceBuild.property.cloudMapOptions">cloudMapOptions</a></code> | <code>aws-cdk-lib.aws_ecs.CloudMapOptions</code> | Configuration for how to register the service in service discovery. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceBuild.property.desiredCount">desiredCount</a></code> | <code>number</code> | How many tasks to run. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceBuild.property.healthCheckGracePeriod">healthCheckGracePeriod</a></code> | <code>aws-cdk-lib.Duration</code> | How long the healthcheck can fail during initial task startup before the task is considered unhealthy. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceBuild.property.maxHealthyPercent">maxHealthyPercent</a></code> | <code>number</code> | Maximum percentage of tasks that can be launched. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceBuild.property.minHealthyPercent">minHealthyPercent</a></code> | <code>number</code> | Minimum healthy task percentage. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@aws-cdk-containers/ecs-service-extensions.ServiceBuild.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster

The cluster in which to launch the service.

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@aws-cdk-containers/ecs-service-extensions.ServiceBuild.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: TaskDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinition

The task definition registered to this service.

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="@aws-cdk-containers/ecs-service-extensions.ServiceBuild.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: boolean;
```

- *Type:* boolean
- *Default:* false

Specifies whether the task's elastic network interface receives a public IP address.

If true, each task will receive a public IP address.

---

##### `cloudMapOptions`<sup>Optional</sup> <a name="cloudMapOptions" id="@aws-cdk-containers/ecs-service-extensions.ServiceBuild.property.cloudMapOptions"></a>

```typescript
public readonly cloudMapOptions: CloudMapOptions;
```

- *Type:* aws-cdk-lib.aws_ecs.CloudMapOptions
- *Default:* No Cloud Map configured

Configuration for how to register the service in service discovery.

---

##### `desiredCount`<sup>Optional</sup> <a name="desiredCount" id="@aws-cdk-containers/ecs-service-extensions.ServiceBuild.property.desiredCount"></a>

```typescript
public readonly desiredCount: number;
```

- *Type:* number
- *Default:* 1

How many tasks to run.

---

##### `healthCheckGracePeriod`<sup>Optional</sup> <a name="healthCheckGracePeriod" id="@aws-cdk-containers/ecs-service-extensions.ServiceBuild.property.healthCheckGracePeriod"></a>

```typescript
public readonly healthCheckGracePeriod: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* No grace period

How long the healthcheck can fail during initial task startup before the task is considered unhealthy.

This is used to give the task more
time to start passing healthchecks.

---

##### `maxHealthyPercent`<sup>Optional</sup> <a name="maxHealthyPercent" id="@aws-cdk-containers/ecs-service-extensions.ServiceBuild.property.maxHealthyPercent"></a>

```typescript
public readonly maxHealthyPercent: number;
```

- *Type:* number
- *Default:* 200

Maximum percentage of tasks that can be launched.

---

##### `minHealthyPercent`<sup>Optional</sup> <a name="minHealthyPercent" id="@aws-cdk-containers/ecs-service-extensions.ServiceBuild.property.minHealthyPercent"></a>

```typescript
public readonly minHealthyPercent: number;
```

- *Type:* number
- *Default:* 100

Minimum healthy task percentage.

---

### ServiceProps <a name="ServiceProps" id="@aws-cdk-containers/ecs-service-extensions.ServiceProps"></a>

The settings for an ECS Service.

#### Initializer <a name="Initializer" id="@aws-cdk-containers/ecs-service-extensions.ServiceProps.Initializer"></a>

```typescript
import { ServiceProps } from '@aws-cdk-containers/ecs-service-extensions'

const serviceProps: ServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceProps.property.environment">environment</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.IEnvironment">IEnvironment</a></code> | The environment to launch the service in. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceProps.property.serviceDescription">serviceDescription</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceDescription">ServiceDescription</a></code> | The ServiceDescription used to build the service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceProps.property.autoScaleTaskCount">autoScaleTaskCount</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.AutoScalingOptions">AutoScalingOptions</a></code> | The options for configuring the auto scaling target. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceProps.property.desiredCount">desiredCount</a></code> | <code>number</code> | The desired number of instantiations of the task definition to keep running on the service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceProps.property.taskRole">taskRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The name of the IAM role that grants containers in the task permission to call AWS APIs on your behalf. |

---

##### `environment`<sup>Required</sup> <a name="environment" id="@aws-cdk-containers/ecs-service-extensions.ServiceProps.property.environment"></a>

```typescript
public readonly environment: IEnvironment;
```

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.IEnvironment">IEnvironment</a>

The environment to launch the service in.

---

##### `serviceDescription`<sup>Required</sup> <a name="serviceDescription" id="@aws-cdk-containers/ecs-service-extensions.ServiceProps.property.serviceDescription"></a>

```typescript
public readonly serviceDescription: ServiceDescription;
```

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ServiceDescription">ServiceDescription</a>

The ServiceDescription used to build the service.

---

##### `autoScaleTaskCount`<sup>Optional</sup> <a name="autoScaleTaskCount" id="@aws-cdk-containers/ecs-service-extensions.ServiceProps.property.autoScaleTaskCount"></a>

```typescript
public readonly autoScaleTaskCount: AutoScalingOptions;
```

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.AutoScalingOptions">AutoScalingOptions</a>
- *Default:* none

The options for configuring the auto scaling target.

---

##### `desiredCount`<sup>Optional</sup> <a name="desiredCount" id="@aws-cdk-containers/ecs-service-extensions.ServiceProps.property.desiredCount"></a>

```typescript
public readonly desiredCount: number;
```

- *Type:* number
- *Default:* When creating the service, default is 1; when updating the service, default uses the current task number.

The desired number of instantiations of the task definition to keep running on the service.

---

##### `taskRole`<sup>Optional</sup> <a name="taskRole" id="@aws-cdk-containers/ecs-service-extensions.ServiceProps.property.taskRole"></a>

```typescript
public readonly taskRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A task role is automatically created for you.

The name of the IAM role that grants containers in the task permission to call AWS APIs on your behalf.

---

### SubscriptionQueue <a name="SubscriptionQueue" id="@aws-cdk-containers/ecs-service-extensions.SubscriptionQueue"></a>

`SubscriptionQueue` represents the subscription queue object which includes the topic-specific queue and its corresponding auto scaling fields.

#### Initializer <a name="Initializer" id="@aws-cdk-containers/ecs-service-extensions.SubscriptionQueue.Initializer"></a>

```typescript
import { SubscriptionQueue } from '@aws-cdk-containers/ecs-service-extensions'

const subscriptionQueue: SubscriptionQueue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.SubscriptionQueue.property.queue">queue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The user-provided queue to subscribe to the given topic. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.SubscriptionQueue.property.scaleOnLatency">scaleOnLatency</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.QueueAutoScalingOptions">QueueAutoScalingOptions</a></code> | The user-provided queue delay fields to configure auto scaling for the topic-specific queue. |

---

##### `queue`<sup>Required</sup> <a name="queue" id="@aws-cdk-containers/ecs-service-extensions.SubscriptionQueue.property.queue"></a>

```typescript
public readonly queue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

The user-provided queue to subscribe to the given topic.

---

##### `scaleOnLatency`<sup>Optional</sup> <a name="scaleOnLatency" id="@aws-cdk-containers/ecs-service-extensions.SubscriptionQueue.property.scaleOnLatency"></a>

```typescript
public readonly scaleOnLatency: QueueAutoScalingOptions;
```

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.QueueAutoScalingOptions">QueueAutoScalingOptions</a>
- *Default:* none

The user-provided queue delay fields to configure auto scaling for the topic-specific queue.

---

### TopicSubscriptionProps <a name="TopicSubscriptionProps" id="@aws-cdk-containers/ecs-service-extensions.TopicSubscriptionProps"></a>

The topic-specific settings for creating the queue subscriptions.

#### Initializer <a name="Initializer" id="@aws-cdk-containers/ecs-service-extensions.TopicSubscriptionProps.Initializer"></a>

```typescript
import { TopicSubscriptionProps } from '@aws-cdk-containers/ecs-service-extensions'

const topicSubscriptionProps: TopicSubscriptionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.TopicSubscriptionProps.property.topic">topic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The SNS Topic to subscribe to. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.TopicSubscriptionProps.property.queue">queue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The user-provided queue to subscribe to the given topic. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.TopicSubscriptionProps.property.topicSubscriptionQueue">topicSubscriptionQueue</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.SubscriptionQueue">SubscriptionQueue</a></code> | The object representing topic-specific queue and corresponding queue delay fields to configure auto scaling. |

---

##### `topic`<sup>Required</sup> <a name="topic" id="@aws-cdk-containers/ecs-service-extensions.TopicSubscriptionProps.property.topic"></a>

```typescript
public readonly topic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic

The SNS Topic to subscribe to.

---

##### ~~`queue`~~<sup>Optional</sup> <a name="queue" id="@aws-cdk-containers/ecs-service-extensions.TopicSubscriptionProps.property.queue"></a>

- *Deprecated:* use `topicSubscriptionQueue`

```typescript
public readonly queue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue
- *Default:* none

The user-provided queue to subscribe to the given topic.

---

##### `topicSubscriptionQueue`<sup>Optional</sup> <a name="topicSubscriptionQueue" id="@aws-cdk-containers/ecs-service-extensions.TopicSubscriptionProps.property.topicSubscriptionQueue"></a>

```typescript
public readonly topicSubscriptionQueue: SubscriptionQueue;
```

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.SubscriptionQueue">SubscriptionQueue</a>
- *Default:* none

The object representing topic-specific queue and corresponding queue delay fields to configure auto scaling.

If not provided, the default `eventsQueue` will subscribe to the given topic.

---

## Classes <a name="Classes" id="Classes"></a>

### AppMeshExtension <a name="AppMeshExtension" id="@aws-cdk-containers/ecs-service-extensions.AppMeshExtension"></a>

This extension adds an Envoy sidecar to the task definition and creates the App Mesh resources required to route network traffic to the container in a service mesh.

The service will then be available to other App Mesh services at the
address `<service name>.<environment name>`. For example, a service called
`orders` deploying in an environment called `production` would be accessible
to other App Mesh enabled services at the address `http://orders.production`.

#### Initializers <a name="Initializers" id="@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.Initializer"></a>

```typescript
import { AppMeshExtension } from '@aws-cdk-containers/ecs-service-extensions'

new AppMeshExtension(props: MeshProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.Initializer.parameter.props">props</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.MeshProps">MeshProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.Initializer.parameter.props"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.MeshProps">MeshProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.addContainerMutatingHook">addContainerMutatingHook</a></code> | This hook allows another service extension to register a mutating hook for changing the primary container of this extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.addHooks">addHooks</a></code> | A hook that allows the extension to add hooks to other extensions that are registered. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.connectToService">connectToService</a></code> | This hook allows the extension to establish a connection to extensions from another service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.modifyServiceProps">modifyServiceProps</a></code> | Prior to launching the task definition as a service, this hook is called on each extension to give it a chance to mutate the properties of the service to be created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.modifyTaskDefinitionProps">modifyTaskDefinitionProps</a></code> | This is a hook which allows extensions to modify the settings of the task definition prior to it being created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.prehook">prehook</a></code> | A hook that is called for each extension ahead of time to allow for any initial setup, such as creating resources in advance. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.resolveContainerDependencies">resolveContainerDependencies</a></code> | Once all containers are added to the task definition, this hook is called for each extension to give it a chance to resolve its dependency graph so that its container starts in the right order based on the other extensions that were enabled. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.useService">useService</a></code> | When this hook is implemented by extension, it allows the extension to use the service which has been created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.useTaskDefinition">useTaskDefinition</a></code> | Once the task definition is created, this hook is called for each extension to give it a chance to add containers to the task definition, change the task definition's role to add permissions, etc. |

---

##### `addContainerMutatingHook` <a name="addContainerMutatingHook" id="@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.addContainerMutatingHook"></a>

```typescript
public addContainerMutatingHook(hook: ContainerMutatingHook): void
```

This hook allows another service extension to register a mutating hook for changing the primary container of this extension.

This is primarily used
for the application extension. For example, the Firelens extension wants to
be able to modify the settings of the application container to
route logs through Firelens.

###### `hook`<sup>Required</sup> <a name="hook" id="@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.addContainerMutatingHook.parameter.hook"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ContainerMutatingHook">ContainerMutatingHook</a>

---

##### `addHooks` <a name="addHooks" id="@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.addHooks"></a>

```typescript
public addHooks(): void
```

A hook that allows the extension to add hooks to other extensions that are registered.

##### `connectToService` <a name="connectToService" id="@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.connectToService"></a>

```typescript
public connectToService(otherService: Service, _connectToProps?: ConnectToProps): void
```

This hook allows the extension to establish a connection to extensions from another service.

Usually used for things like
allowing one service to talk to the load balancer or service mesh
proxy for another service.

###### `otherService`<sup>Required</sup> <a name="otherService" id="@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.connectToService.parameter.otherService"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a>

---

###### `_connectToProps`<sup>Optional</sup> <a name="_connectToProps" id="@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.connectToService.parameter._connectToProps"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ConnectToProps">ConnectToProps</a>

---

##### `modifyServiceProps` <a name="modifyServiceProps" id="@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.modifyServiceProps"></a>

```typescript
public modifyServiceProps(props: ServiceBuild): ServiceBuild
```

Prior to launching the task definition as a service, this hook is called on each extension to give it a chance to mutate the properties of the service to be created.

###### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.modifyServiceProps.parameter.props"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ServiceBuild">ServiceBuild</a>

---

##### `modifyTaskDefinitionProps` <a name="modifyTaskDefinitionProps" id="@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.modifyTaskDefinitionProps"></a>

```typescript
public modifyTaskDefinitionProps(props: TaskDefinitionProps): TaskDefinitionProps
```

This is a hook which allows extensions to modify the settings of the task definition prior to it being created.

For example, the App Mesh
extension needs to configure an Envoy proxy in the task definition,
or the Application extension wants to set the overall resource for
the task.

###### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.modifyTaskDefinitionProps.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinitionProps

---

##### `prehook` <a name="prehook" id="@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.prehook"></a>

```typescript
public prehook(service: Service, scope: Construct): void
```

A hook that is called for each extension ahead of time to allow for any initial setup, such as creating resources in advance.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.prehook.parameter.service"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a>

---

###### `scope`<sup>Required</sup> <a name="scope" id="@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.prehook.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `resolveContainerDependencies` <a name="resolveContainerDependencies" id="@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.resolveContainerDependencies"></a>

```typescript
public resolveContainerDependencies(): void
```

Once all containers are added to the task definition, this hook is called for each extension to give it a chance to resolve its dependency graph so that its container starts in the right order based on the other extensions that were enabled.

##### `useService` <a name="useService" id="@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.useService"></a>

```typescript
public useService(service: Ec2Service | FargateService): void
```

When this hook is implemented by extension, it allows the extension to use the service which has been created.

It is generally used to
create any final resources which might depend on the service itself.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.useService.parameter.service"></a>

- *Type:* aws-cdk-lib.aws_ecs.Ec2Service | aws-cdk-lib.aws_ecs.FargateService

---

##### `useTaskDefinition` <a name="useTaskDefinition" id="@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.useTaskDefinition"></a>

```typescript
public useTaskDefinition(taskDefinition: TaskDefinition): void
```

Once the task definition is created, this hook is called for each extension to give it a chance to add containers to the task definition, change the task definition's role to add permissions, etc.

###### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.useTaskDefinition.parameter.taskDefinition"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinition

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.property.name">name</a></code> | <code>string</code> | The name of the extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.property.container">container</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerDefinition</code> | The container for this extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.property.protocol">protocol</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.Protocol">Protocol</a></code> | The protocol used for AppMesh routing. |

---

##### `name`<sup>Required</sup> <a name="name" id="@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the extension.

---

##### `container`<sup>Optional</sup> <a name="container" id="@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.property.container"></a>

```typescript
public readonly container: ContainerDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerDefinition

The container for this extension.

Most extensions have a container, but not
every extension is required to have a container. Some extensions may just
modify the properties of the service, or create external resources
connected to the service.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@aws-cdk-containers/ecs-service-extensions.AppMeshExtension.property.protocol"></a>

```typescript
public readonly protocol: Protocol;
```

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Protocol">Protocol</a>

The protocol used for AppMesh routing.

default - Protocol.HTTP

---


### AssignPublicIpExtension <a name="AssignPublicIpExtension" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension"></a>

Modifies the service to assign a public ip to each task and optionally exposes public IPs in a Route 53 record set.

Note: If you want to change the DNS zone or record name, you will need to
remove this extension completely and then re-add it.

#### Initializers <a name="Initializers" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.Initializer"></a>

```typescript
import { AssignPublicIpExtension } from '@aws-cdk-containers/ecs-service-extensions'

new AssignPublicIpExtension(options?: AssignPublicIpExtensionOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.Initializer.parameter.options">options</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtensionOptions">AssignPublicIpExtensionOptions</a></code> | *No description.* |

---

##### `options`<sup>Optional</sup> <a name="options" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.Initializer.parameter.options"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtensionOptions">AssignPublicIpExtensionOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.addContainerMutatingHook">addContainerMutatingHook</a></code> | This hook allows another service extension to register a mutating hook for changing the primary container of this extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.addHooks">addHooks</a></code> | A hook that allows the extension to add hooks to other extensions that are registered. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.connectToService">connectToService</a></code> | This hook allows the extension to establish a connection to extensions from another service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.modifyServiceProps">modifyServiceProps</a></code> | Prior to launching the task definition as a service, this hook is called on each extension to give it a chance to mutate the properties of the service to be created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.modifyTaskDefinitionProps">modifyTaskDefinitionProps</a></code> | This is a hook which allows extensions to modify the settings of the task definition prior to it being created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.prehook">prehook</a></code> | A hook that is called for each extension ahead of time to allow for any initial setup, such as creating resources in advance. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.resolveContainerDependencies">resolveContainerDependencies</a></code> | Once all containers are added to the task definition, this hook is called for each extension to give it a chance to resolve its dependency graph so that its container starts in the right order based on the other extensions that were enabled. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.useService">useService</a></code> | When this hook is implemented by extension, it allows the extension to use the service which has been created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.useTaskDefinition">useTaskDefinition</a></code> | Once the task definition is created, this hook is called for each extension to give it a chance to add containers to the task definition, change the task definition's role to add permissions, etc. |

---

##### `addContainerMutatingHook` <a name="addContainerMutatingHook" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.addContainerMutatingHook"></a>

```typescript
public addContainerMutatingHook(hook: ContainerMutatingHook): void
```

This hook allows another service extension to register a mutating hook for changing the primary container of this extension.

This is primarily used
for the application extension. For example, the Firelens extension wants to
be able to modify the settings of the application container to
route logs through Firelens.

###### `hook`<sup>Required</sup> <a name="hook" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.addContainerMutatingHook.parameter.hook"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ContainerMutatingHook">ContainerMutatingHook</a>

---

##### `addHooks` <a name="addHooks" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.addHooks"></a>

```typescript
public addHooks(): void
```

A hook that allows the extension to add hooks to other extensions that are registered.

##### `connectToService` <a name="connectToService" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.connectToService"></a>

```typescript
public connectToService(service: Service, connectToProps?: ConnectToProps): void
```

This hook allows the extension to establish a connection to extensions from another service.

Usually used for things like
allowing one service to talk to the load balancer or service mesh
proxy for another service.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.connectToService.parameter.service"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a>

The other service to connect to.

---

###### `connectToProps`<sup>Optional</sup> <a name="connectToProps" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.connectToService.parameter.connectToProps"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ConnectToProps">ConnectToProps</a>

---

##### `modifyServiceProps` <a name="modifyServiceProps" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.modifyServiceProps"></a>

```typescript
public modifyServiceProps(props: ServiceBuild): ServiceBuild
```

Prior to launching the task definition as a service, this hook is called on each extension to give it a chance to mutate the properties of the service to be created.

###### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.modifyServiceProps.parameter.props"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ServiceBuild">ServiceBuild</a>

---

##### `modifyTaskDefinitionProps` <a name="modifyTaskDefinitionProps" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.modifyTaskDefinitionProps"></a>

```typescript
public modifyTaskDefinitionProps(props: TaskDefinitionProps): TaskDefinitionProps
```

This is a hook which allows extensions to modify the settings of the task definition prior to it being created.

For example, the App Mesh
extension needs to configure an Envoy proxy in the task definition,
or the Application extension wants to set the overall resource for
the task.

###### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.modifyTaskDefinitionProps.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinitionProps

Properties of the task definition to be created.

---

##### `prehook` <a name="prehook" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.prehook"></a>

```typescript
public prehook(service: Service, _scope: Construct): void
```

A hook that is called for each extension ahead of time to allow for any initial setup, such as creating resources in advance.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.prehook.parameter.service"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a>

---

###### `_scope`<sup>Required</sup> <a name="_scope" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.prehook.parameter._scope"></a>

- *Type:* constructs.Construct

---

##### `resolveContainerDependencies` <a name="resolveContainerDependencies" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.resolveContainerDependencies"></a>

```typescript
public resolveContainerDependencies(): void
```

Once all containers are added to the task definition, this hook is called for each extension to give it a chance to resolve its dependency graph so that its container starts in the right order based on the other extensions that were enabled.

##### `useService` <a name="useService" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.useService"></a>

```typescript
public useService(service: Ec2Service | FargateService): void
```

When this hook is implemented by extension, it allows the extension to use the service which has been created.

It is generally used to
create any final resources which might depend on the service itself.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.useService.parameter.service"></a>

- *Type:* aws-cdk-lib.aws_ecs.Ec2Service | aws-cdk-lib.aws_ecs.FargateService

---

##### `useTaskDefinition` <a name="useTaskDefinition" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.useTaskDefinition"></a>

```typescript
public useTaskDefinition(taskDefinition: TaskDefinition): void
```

Once the task definition is created, this hook is called for each extension to give it a chance to add containers to the task definition, change the task definition's role to add permissions, etc.

###### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.useTaskDefinition.parameter.taskDefinition"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinition

The created task definition to add containers to.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.property.name">name</a></code> | <code>string</code> | The name of the extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.property.container">container</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerDefinition</code> | The container for this extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.property.dns">dns</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.AssignPublicIpDnsOptions">AssignPublicIpDnsOptions</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the extension.

---

##### `container`<sup>Optional</sup> <a name="container" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.property.container"></a>

```typescript
public readonly container: ContainerDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerDefinition

The container for this extension.

Most extensions have a container, but not
every extension is required to have a container. Some extensions may just
modify the properties of the service, or create external resources
connected to the service.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@aws-cdk-containers/ecs-service-extensions.AssignPublicIpExtension.property.dns"></a>

```typescript
public readonly dns: AssignPublicIpDnsOptions;
```

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.AssignPublicIpDnsOptions">AssignPublicIpDnsOptions</a>

---


### CloudwatchAgentExtension <a name="CloudwatchAgentExtension" id="@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension"></a>

This extension adds a CloudWatch agent to the task definition and configures the task to be able to publish metrics to CloudWatch.

#### Initializers <a name="Initializers" id="@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.Initializer"></a>

```typescript
import { CloudwatchAgentExtension } from '@aws-cdk-containers/ecs-service-extensions'

new CloudwatchAgentExtension()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.addContainerMutatingHook">addContainerMutatingHook</a></code> | This hook allows another service extension to register a mutating hook for changing the primary container of this extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.addHooks">addHooks</a></code> | A hook that allows the extension to add hooks to other extensions that are registered. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.connectToService">connectToService</a></code> | This hook allows the extension to establish a connection to extensions from another service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.modifyServiceProps">modifyServiceProps</a></code> | Prior to launching the task definition as a service, this hook is called on each extension to give it a chance to mutate the properties of the service to be created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.modifyTaskDefinitionProps">modifyTaskDefinitionProps</a></code> | This is a hook which allows extensions to modify the settings of the task definition prior to it being created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.prehook">prehook</a></code> | A hook that is called for each extension ahead of time to allow for any initial setup, such as creating resources in advance. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.resolveContainerDependencies">resolveContainerDependencies</a></code> | Once all containers are added to the task definition, this hook is called for each extension to give it a chance to resolve its dependency graph so that its container starts in the right order based on the other extensions that were enabled. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.useService">useService</a></code> | When this hook is implemented by extension, it allows the extension to use the service which has been created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.useTaskDefinition">useTaskDefinition</a></code> | Once the task definition is created, this hook is called for each extension to give it a chance to add containers to the task definition, change the task definition's role to add permissions, etc. |

---

##### `addContainerMutatingHook` <a name="addContainerMutatingHook" id="@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.addContainerMutatingHook"></a>

```typescript
public addContainerMutatingHook(hook: ContainerMutatingHook): void
```

This hook allows another service extension to register a mutating hook for changing the primary container of this extension.

This is primarily used
for the application extension. For example, the Firelens extension wants to
be able to modify the settings of the application container to
route logs through Firelens.

###### `hook`<sup>Required</sup> <a name="hook" id="@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.addContainerMutatingHook.parameter.hook"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ContainerMutatingHook">ContainerMutatingHook</a>

---

##### `addHooks` <a name="addHooks" id="@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.addHooks"></a>

```typescript
public addHooks(): void
```

A hook that allows the extension to add hooks to other extensions that are registered.

##### `connectToService` <a name="connectToService" id="@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.connectToService"></a>

```typescript
public connectToService(service: Service, connectToProps?: ConnectToProps): void
```

This hook allows the extension to establish a connection to extensions from another service.

Usually used for things like
allowing one service to talk to the load balancer or service mesh
proxy for another service.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.connectToService.parameter.service"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a>

The other service to connect to.

---

###### `connectToProps`<sup>Optional</sup> <a name="connectToProps" id="@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.connectToService.parameter.connectToProps"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ConnectToProps">ConnectToProps</a>

---

##### `modifyServiceProps` <a name="modifyServiceProps" id="@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.modifyServiceProps"></a>

```typescript
public modifyServiceProps(props: ServiceBuild): ServiceBuild
```

Prior to launching the task definition as a service, this hook is called on each extension to give it a chance to mutate the properties of the service to be created.

###### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.modifyServiceProps.parameter.props"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ServiceBuild">ServiceBuild</a>

The service properties to mutate.

---

##### `modifyTaskDefinitionProps` <a name="modifyTaskDefinitionProps" id="@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.modifyTaskDefinitionProps"></a>

```typescript
public modifyTaskDefinitionProps(props: TaskDefinitionProps): TaskDefinitionProps
```

This is a hook which allows extensions to modify the settings of the task definition prior to it being created.

For example, the App Mesh
extension needs to configure an Envoy proxy in the task definition,
or the Application extension wants to set the overall resource for
the task.

###### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.modifyTaskDefinitionProps.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinitionProps

Properties of the task definition to be created.

---

##### `prehook` <a name="prehook" id="@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.prehook"></a>

```typescript
public prehook(service: Service, scope: Construct): void
```

A hook that is called for each extension ahead of time to allow for any initial setup, such as creating resources in advance.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.prehook.parameter.service"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a>

---

###### `scope`<sup>Required</sup> <a name="scope" id="@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.prehook.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `resolveContainerDependencies` <a name="resolveContainerDependencies" id="@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.resolveContainerDependencies"></a>

```typescript
public resolveContainerDependencies(): void
```

Once all containers are added to the task definition, this hook is called for each extension to give it a chance to resolve its dependency graph so that its container starts in the right order based on the other extensions that were enabled.

##### `useService` <a name="useService" id="@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.useService"></a>

```typescript
public useService(service: Ec2Service | FargateService): void
```

When this hook is implemented by extension, it allows the extension to use the service which has been created.

It is generally used to
create any final resources which might depend on the service itself.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.useService.parameter.service"></a>

- *Type:* aws-cdk-lib.aws_ecs.Ec2Service | aws-cdk-lib.aws_ecs.FargateService

The generated service.

---

##### `useTaskDefinition` <a name="useTaskDefinition" id="@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.useTaskDefinition"></a>

```typescript
public useTaskDefinition(taskDefinition: TaskDefinition): void
```

Once the task definition is created, this hook is called for each extension to give it a chance to add containers to the task definition, change the task definition's role to add permissions, etc.

###### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.useTaskDefinition.parameter.taskDefinition"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinition

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.property.name">name</a></code> | <code>string</code> | The name of the extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.property.container">container</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerDefinition</code> | The container for this extension. |

---

##### `name`<sup>Required</sup> <a name="name" id="@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the extension.

---

##### `container`<sup>Optional</sup> <a name="container" id="@aws-cdk-containers/ecs-service-extensions.CloudwatchAgentExtension.property.container"></a>

```typescript
public readonly container: ContainerDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerDefinition

The container for this extension.

Most extensions have a container, but not
every extension is required to have a container. Some extensions may just
modify the properties of the service, or create external resources
connected to the service.

---


### Container <a name="Container" id="@aws-cdk-containers/ecs-service-extensions.Container"></a>

The main container of a service.

This is generally the container
which runs your application business logic. Other extensions will attach
sidecars alongside this main container.

#### Initializers <a name="Initializers" id="@aws-cdk-containers/ecs-service-extensions.Container.Initializer"></a>

```typescript
import { Container } from '@aws-cdk-containers/ecs-service-extensions'

new Container(props: ContainerExtensionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Container.Initializer.parameter.props">props</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.ContainerExtensionProps">ContainerExtensionProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.Container.Initializer.parameter.props"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ContainerExtensionProps">ContainerExtensionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Container.addContainerMutatingHook">addContainerMutatingHook</a></code> | This hook allows another service extension to register a mutating hook for changing the primary container of this extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Container.addHooks">addHooks</a></code> | A hook that allows the extension to add hooks to other extensions that are registered. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Container.connectToService">connectToService</a></code> | This hook allows the extension to establish a connection to extensions from another service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Container.modifyServiceProps">modifyServiceProps</a></code> | Prior to launching the task definition as a service, this hook is called on each extension to give it a chance to mutate the properties of the service to be created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Container.modifyTaskDefinitionProps">modifyTaskDefinitionProps</a></code> | This is a hook which allows extensions to modify the settings of the task definition prior to it being created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Container.prehook">prehook</a></code> | A hook that is called for each extension ahead of time to allow for any initial setup, such as creating resources in advance. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Container.resolveContainerDependencies">resolveContainerDependencies</a></code> | Once all containers are added to the task definition, this hook is called for each extension to give it a chance to resolve its dependency graph so that its container starts in the right order based on the other extensions that were enabled. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Container.useService">useService</a></code> | When this hook is implemented by extension, it allows the extension to use the service which has been created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Container.useTaskDefinition">useTaskDefinition</a></code> | Once the task definition is created, this hook is called for each extension to give it a chance to add containers to the task definition, change the task definition's role to add permissions, etc. |

---

##### `addContainerMutatingHook` <a name="addContainerMutatingHook" id="@aws-cdk-containers/ecs-service-extensions.Container.addContainerMutatingHook"></a>

```typescript
public addContainerMutatingHook(hook: ContainerMutatingHook): void
```

This hook allows another service extension to register a mutating hook for changing the primary container of this extension.

This is primarily used
for the application extension. For example, the Firelens extension wants to
be able to modify the settings of the application container to
route logs through Firelens.

###### `hook`<sup>Required</sup> <a name="hook" id="@aws-cdk-containers/ecs-service-extensions.Container.addContainerMutatingHook.parameter.hook"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ContainerMutatingHook">ContainerMutatingHook</a>

---

##### `addHooks` <a name="addHooks" id="@aws-cdk-containers/ecs-service-extensions.Container.addHooks"></a>

```typescript
public addHooks(): void
```

A hook that allows the extension to add hooks to other extensions that are registered.

##### `connectToService` <a name="connectToService" id="@aws-cdk-containers/ecs-service-extensions.Container.connectToService"></a>

```typescript
public connectToService(service: Service, connectToProps?: ConnectToProps): void
```

This hook allows the extension to establish a connection to extensions from another service.

Usually used for things like
allowing one service to talk to the load balancer or service mesh
proxy for another service.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.Container.connectToService.parameter.service"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a>

The other service to connect to.

---

###### `connectToProps`<sup>Optional</sup> <a name="connectToProps" id="@aws-cdk-containers/ecs-service-extensions.Container.connectToService.parameter.connectToProps"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ConnectToProps">ConnectToProps</a>

---

##### `modifyServiceProps` <a name="modifyServiceProps" id="@aws-cdk-containers/ecs-service-extensions.Container.modifyServiceProps"></a>

```typescript
public modifyServiceProps(props: ServiceBuild): ServiceBuild
```

Prior to launching the task definition as a service, this hook is called on each extension to give it a chance to mutate the properties of the service to be created.

###### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.Container.modifyServiceProps.parameter.props"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ServiceBuild">ServiceBuild</a>

The service properties to mutate.

---

##### `modifyTaskDefinitionProps` <a name="modifyTaskDefinitionProps" id="@aws-cdk-containers/ecs-service-extensions.Container.modifyTaskDefinitionProps"></a>

```typescript
public modifyTaskDefinitionProps(props: TaskDefinitionProps): TaskDefinitionProps
```

This is a hook which allows extensions to modify the settings of the task definition prior to it being created.

For example, the App Mesh
extension needs to configure an Envoy proxy in the task definition,
or the Application extension wants to set the overall resource for
the task.

###### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.Container.modifyTaskDefinitionProps.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinitionProps

---

##### `prehook` <a name="prehook" id="@aws-cdk-containers/ecs-service-extensions.Container.prehook"></a>

```typescript
public prehook(service: Service, scope: Construct): void
```

A hook that is called for each extension ahead of time to allow for any initial setup, such as creating resources in advance.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.Container.prehook.parameter.service"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a>

---

###### `scope`<sup>Required</sup> <a name="scope" id="@aws-cdk-containers/ecs-service-extensions.Container.prehook.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `resolveContainerDependencies` <a name="resolveContainerDependencies" id="@aws-cdk-containers/ecs-service-extensions.Container.resolveContainerDependencies"></a>

```typescript
public resolveContainerDependencies(): void
```

Once all containers are added to the task definition, this hook is called for each extension to give it a chance to resolve its dependency graph so that its container starts in the right order based on the other extensions that were enabled.

##### `useService` <a name="useService" id="@aws-cdk-containers/ecs-service-extensions.Container.useService"></a>

```typescript
public useService(service: Ec2Service | FargateService): void
```

When this hook is implemented by extension, it allows the extension to use the service which has been created.

It is generally used to
create any final resources which might depend on the service itself.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.Container.useService.parameter.service"></a>

- *Type:* aws-cdk-lib.aws_ecs.Ec2Service | aws-cdk-lib.aws_ecs.FargateService

The generated service.

---

##### `useTaskDefinition` <a name="useTaskDefinition" id="@aws-cdk-containers/ecs-service-extensions.Container.useTaskDefinition"></a>

```typescript
public useTaskDefinition(taskDefinition: TaskDefinition): void
```

Once the task definition is created, this hook is called for each extension to give it a chance to add containers to the task definition, change the task definition's role to add permissions, etc.

###### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@aws-cdk-containers/ecs-service-extensions.Container.useTaskDefinition.parameter.taskDefinition"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinition

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Container.property.name">name</a></code> | <code>string</code> | The name of the extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Container.property.container">container</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerDefinition</code> | The container for this extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Container.property.trafficPort">trafficPort</a></code> | <code>number</code> | The port on which the container expects to receive network traffic. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Container.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The log group into which application container logs should be routed. |

---

##### `name`<sup>Required</sup> <a name="name" id="@aws-cdk-containers/ecs-service-extensions.Container.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the extension.

---

##### `container`<sup>Optional</sup> <a name="container" id="@aws-cdk-containers/ecs-service-extensions.Container.property.container"></a>

```typescript
public readonly container: ContainerDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerDefinition

The container for this extension.

Most extensions have a container, but not
every extension is required to have a container. Some extensions may just
modify the properties of the service, or create external resources
connected to the service.

---

##### `trafficPort`<sup>Required</sup> <a name="trafficPort" id="@aws-cdk-containers/ecs-service-extensions.Container.property.trafficPort"></a>

```typescript
public readonly trafficPort: number;
```

- *Type:* number

The port on which the container expects to receive network traffic.

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@aws-cdk-containers/ecs-service-extensions.Container.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The log group into which application container logs should be routed.

---


### ContainerMutatingHook <a name="ContainerMutatingHook" id="@aws-cdk-containers/ecs-service-extensions.ContainerMutatingHook"></a>

This is an abstract class wrapper for a mutating hook.

It is
extended by any extension which wants to mutate other extension's containers.

#### Initializers <a name="Initializers" id="@aws-cdk-containers/ecs-service-extensions.ContainerMutatingHook.Initializer"></a>

```typescript
import { ContainerMutatingHook } from '@aws-cdk-containers/ecs-service-extensions'

new ContainerMutatingHook()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ContainerMutatingHook.mutateContainerDefinition">mutateContainerDefinition</a></code> | This is a hook for modifying the container definition of any upstream containers. |

---

##### `mutateContainerDefinition` <a name="mutateContainerDefinition" id="@aws-cdk-containers/ecs-service-extensions.ContainerMutatingHook.mutateContainerDefinition"></a>

```typescript
public mutateContainerDefinition(props: ContainerDefinitionOptions): ContainerDefinitionOptions
```

This is a hook for modifying the container definition of any upstream containers.

This is primarily used for the main application container.
For example, the Firelens extension wants to be able to modify the logging
settings of the application container.

###### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.ContainerMutatingHook.mutateContainerDefinition.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_ecs.ContainerDefinitionOptions

The container definition to mutate.

---




### FireLensExtension <a name="FireLensExtension" id="@aws-cdk-containers/ecs-service-extensions.FireLensExtension"></a>

This extension adds a FluentBit log router to the task definition and does all the configuration necessarily to enable log routing for the task using FireLens.

#### Initializers <a name="Initializers" id="@aws-cdk-containers/ecs-service-extensions.FireLensExtension.Initializer"></a>

```typescript
import { FireLensExtension } from '@aws-cdk-containers/ecs-service-extensions'

new FireLensExtension()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.FireLensExtension.addContainerMutatingHook">addContainerMutatingHook</a></code> | This hook allows another service extension to register a mutating hook for changing the primary container of this extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.FireLensExtension.addHooks">addHooks</a></code> | A hook that allows the extension to add hooks to other extensions that are registered. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.FireLensExtension.connectToService">connectToService</a></code> | This hook allows the extension to establish a connection to extensions from another service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.FireLensExtension.modifyServiceProps">modifyServiceProps</a></code> | Prior to launching the task definition as a service, this hook is called on each extension to give it a chance to mutate the properties of the service to be created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.FireLensExtension.modifyTaskDefinitionProps">modifyTaskDefinitionProps</a></code> | This is a hook which allows extensions to modify the settings of the task definition prior to it being created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.FireLensExtension.prehook">prehook</a></code> | A hook that is called for each extension ahead of time to allow for any initial setup, such as creating resources in advance. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.FireLensExtension.resolveContainerDependencies">resolveContainerDependencies</a></code> | Once all containers are added to the task definition, this hook is called for each extension to give it a chance to resolve its dependency graph so that its container starts in the right order based on the other extensions that were enabled. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.FireLensExtension.useService">useService</a></code> | When this hook is implemented by extension, it allows the extension to use the service which has been created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.FireLensExtension.useTaskDefinition">useTaskDefinition</a></code> | Once the task definition is created, this hook is called for each extension to give it a chance to add containers to the task definition, change the task definition's role to add permissions, etc. |

---

##### `addContainerMutatingHook` <a name="addContainerMutatingHook" id="@aws-cdk-containers/ecs-service-extensions.FireLensExtension.addContainerMutatingHook"></a>

```typescript
public addContainerMutatingHook(hook: ContainerMutatingHook): void
```

This hook allows another service extension to register a mutating hook for changing the primary container of this extension.

This is primarily used
for the application extension. For example, the Firelens extension wants to
be able to modify the settings of the application container to
route logs through Firelens.

###### `hook`<sup>Required</sup> <a name="hook" id="@aws-cdk-containers/ecs-service-extensions.FireLensExtension.addContainerMutatingHook.parameter.hook"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ContainerMutatingHook">ContainerMutatingHook</a>

---

##### `addHooks` <a name="addHooks" id="@aws-cdk-containers/ecs-service-extensions.FireLensExtension.addHooks"></a>

```typescript
public addHooks(): void
```

A hook that allows the extension to add hooks to other extensions that are registered.

##### `connectToService` <a name="connectToService" id="@aws-cdk-containers/ecs-service-extensions.FireLensExtension.connectToService"></a>

```typescript
public connectToService(service: Service, connectToProps?: ConnectToProps): void
```

This hook allows the extension to establish a connection to extensions from another service.

Usually used for things like
allowing one service to talk to the load balancer or service mesh
proxy for another service.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.FireLensExtension.connectToService.parameter.service"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a>

The other service to connect to.

---

###### `connectToProps`<sup>Optional</sup> <a name="connectToProps" id="@aws-cdk-containers/ecs-service-extensions.FireLensExtension.connectToService.parameter.connectToProps"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ConnectToProps">ConnectToProps</a>

---

##### `modifyServiceProps` <a name="modifyServiceProps" id="@aws-cdk-containers/ecs-service-extensions.FireLensExtension.modifyServiceProps"></a>

```typescript
public modifyServiceProps(props: ServiceBuild): ServiceBuild
```

Prior to launching the task definition as a service, this hook is called on each extension to give it a chance to mutate the properties of the service to be created.

###### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.FireLensExtension.modifyServiceProps.parameter.props"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ServiceBuild">ServiceBuild</a>

The service properties to mutate.

---

##### `modifyTaskDefinitionProps` <a name="modifyTaskDefinitionProps" id="@aws-cdk-containers/ecs-service-extensions.FireLensExtension.modifyTaskDefinitionProps"></a>

```typescript
public modifyTaskDefinitionProps(props: TaskDefinitionProps): TaskDefinitionProps
```

This is a hook which allows extensions to modify the settings of the task definition prior to it being created.

For example, the App Mesh
extension needs to configure an Envoy proxy in the task definition,
or the Application extension wants to set the overall resource for
the task.

###### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.FireLensExtension.modifyTaskDefinitionProps.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinitionProps

Properties of the task definition to be created.

---

##### `prehook` <a name="prehook" id="@aws-cdk-containers/ecs-service-extensions.FireLensExtension.prehook"></a>

```typescript
public prehook(service: Service, scope: Construct): void
```

A hook that is called for each extension ahead of time to allow for any initial setup, such as creating resources in advance.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.FireLensExtension.prehook.parameter.service"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a>

---

###### `scope`<sup>Required</sup> <a name="scope" id="@aws-cdk-containers/ecs-service-extensions.FireLensExtension.prehook.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `resolveContainerDependencies` <a name="resolveContainerDependencies" id="@aws-cdk-containers/ecs-service-extensions.FireLensExtension.resolveContainerDependencies"></a>

```typescript
public resolveContainerDependencies(): void
```

Once all containers are added to the task definition, this hook is called for each extension to give it a chance to resolve its dependency graph so that its container starts in the right order based on the other extensions that were enabled.

##### `useService` <a name="useService" id="@aws-cdk-containers/ecs-service-extensions.FireLensExtension.useService"></a>

```typescript
public useService(service: Ec2Service | FargateService): void
```

When this hook is implemented by extension, it allows the extension to use the service which has been created.

It is generally used to
create any final resources which might depend on the service itself.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.FireLensExtension.useService.parameter.service"></a>

- *Type:* aws-cdk-lib.aws_ecs.Ec2Service | aws-cdk-lib.aws_ecs.FargateService

The generated service.

---

##### `useTaskDefinition` <a name="useTaskDefinition" id="@aws-cdk-containers/ecs-service-extensions.FireLensExtension.useTaskDefinition"></a>

```typescript
public useTaskDefinition(taskDefinition: TaskDefinition): void
```

Once the task definition is created, this hook is called for each extension to give it a chance to add containers to the task definition, change the task definition's role to add permissions, etc.

###### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@aws-cdk-containers/ecs-service-extensions.FireLensExtension.useTaskDefinition.parameter.taskDefinition"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinition

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.FireLensExtension.property.name">name</a></code> | <code>string</code> | The name of the extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.FireLensExtension.property.container">container</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerDefinition</code> | The container for this extension. |

---

##### `name`<sup>Required</sup> <a name="name" id="@aws-cdk-containers/ecs-service-extensions.FireLensExtension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the extension.

---

##### `container`<sup>Optional</sup> <a name="container" id="@aws-cdk-containers/ecs-service-extensions.FireLensExtension.property.container"></a>

```typescript
public readonly container: ContainerDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerDefinition

The container for this extension.

Most extensions have a container, but not
every extension is required to have a container. Some extensions may just
modify the properties of the service, or create external resources
connected to the service.

---


### FirelensMutatingHook <a name="FirelensMutatingHook" id="@aws-cdk-containers/ecs-service-extensions.FirelensMutatingHook"></a>

This hook modifies the application container's settings so that it routes logs using FireLens.

#### Initializers <a name="Initializers" id="@aws-cdk-containers/ecs-service-extensions.FirelensMutatingHook.Initializer"></a>

```typescript
import { FirelensMutatingHook } from '@aws-cdk-containers/ecs-service-extensions'

new FirelensMutatingHook(props: FirelensProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.FirelensMutatingHook.Initializer.parameter.props">props</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.FirelensProps">FirelensProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.FirelensMutatingHook.Initializer.parameter.props"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.FirelensProps">FirelensProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.FirelensMutatingHook.mutateContainerDefinition">mutateContainerDefinition</a></code> | This is a hook for modifying the container definition of any upstream containers. |

---

##### `mutateContainerDefinition` <a name="mutateContainerDefinition" id="@aws-cdk-containers/ecs-service-extensions.FirelensMutatingHook.mutateContainerDefinition"></a>

```typescript
public mutateContainerDefinition(props: ContainerDefinitionOptions): ContainerDefinitionOptions
```

This is a hook for modifying the container definition of any upstream containers.

This is primarily used for the main application container.
For example, the Firelens extension wants to be able to modify the logging
settings of the application container.

###### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.FirelensMutatingHook.mutateContainerDefinition.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_ecs.ContainerDefinitionOptions

---




### HttpLoadBalancerExtension <a name="HttpLoadBalancerExtension" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension"></a>

This extension add a public facing load balancer for sending traffic to one or more replicas of the application container.

#### Initializers <a name="Initializers" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.Initializer"></a>

```typescript
import { HttpLoadBalancerExtension } from '@aws-cdk-containers/ecs-service-extensions'

new HttpLoadBalancerExtension(props?: HttpLoadBalancerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.Initializer.parameter.props">props</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerProps">HttpLoadBalancerProps</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.Initializer.parameter.props"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerProps">HttpLoadBalancerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.addContainerMutatingHook">addContainerMutatingHook</a></code> | This hook allows another service extension to register a mutating hook for changing the primary container of this extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.addHooks">addHooks</a></code> | A hook that allows the extension to add hooks to other extensions that are registered. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.connectToService">connectToService</a></code> | This hook allows the extension to establish a connection to extensions from another service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.modifyServiceProps">modifyServiceProps</a></code> | Prior to launching the task definition as a service, this hook is called on each extension to give it a chance to mutate the properties of the service to be created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.modifyTaskDefinitionProps">modifyTaskDefinitionProps</a></code> | This is a hook which allows extensions to modify the settings of the task definition prior to it being created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.prehook">prehook</a></code> | A hook that is called for each extension ahead of time to allow for any initial setup, such as creating resources in advance. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.resolveContainerDependencies">resolveContainerDependencies</a></code> | Once all containers are added to the task definition, this hook is called for each extension to give it a chance to resolve its dependency graph so that its container starts in the right order based on the other extensions that were enabled. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.useService">useService</a></code> | When this hook is implemented by extension, it allows the extension to use the service which has been created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.useTaskDefinition">useTaskDefinition</a></code> | Once the task definition is created, this hook is called for each extension to give it a chance to add containers to the task definition, change the task definition's role to add permissions, etc. |

---

##### `addContainerMutatingHook` <a name="addContainerMutatingHook" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.addContainerMutatingHook"></a>

```typescript
public addContainerMutatingHook(hook: ContainerMutatingHook): void
```

This hook allows another service extension to register a mutating hook for changing the primary container of this extension.

This is primarily used
for the application extension. For example, the Firelens extension wants to
be able to modify the settings of the application container to
route logs through Firelens.

###### `hook`<sup>Required</sup> <a name="hook" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.addContainerMutatingHook.parameter.hook"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ContainerMutatingHook">ContainerMutatingHook</a>

---

##### `addHooks` <a name="addHooks" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.addHooks"></a>

```typescript
public addHooks(): void
```

A hook that allows the extension to add hooks to other extensions that are registered.

##### `connectToService` <a name="connectToService" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.connectToService"></a>

```typescript
public connectToService(service: Service, connectToProps?: ConnectToProps): void
```

This hook allows the extension to establish a connection to extensions from another service.

Usually used for things like
allowing one service to talk to the load balancer or service mesh
proxy for another service.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.connectToService.parameter.service"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a>

The other service to connect to.

---

###### `connectToProps`<sup>Optional</sup> <a name="connectToProps" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.connectToService.parameter.connectToProps"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ConnectToProps">ConnectToProps</a>

---

##### `modifyServiceProps` <a name="modifyServiceProps" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.modifyServiceProps"></a>

```typescript
public modifyServiceProps(props: ServiceBuild): ServiceBuild
```

Prior to launching the task definition as a service, this hook is called on each extension to give it a chance to mutate the properties of the service to be created.

###### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.modifyServiceProps.parameter.props"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ServiceBuild">ServiceBuild</a>

---

##### `modifyTaskDefinitionProps` <a name="modifyTaskDefinitionProps" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.modifyTaskDefinitionProps"></a>

```typescript
public modifyTaskDefinitionProps(props: TaskDefinitionProps): TaskDefinitionProps
```

This is a hook which allows extensions to modify the settings of the task definition prior to it being created.

For example, the App Mesh
extension needs to configure an Envoy proxy in the task definition,
or the Application extension wants to set the overall resource for
the task.

###### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.modifyTaskDefinitionProps.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinitionProps

Properties of the task definition to be created.

---

##### `prehook` <a name="prehook" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.prehook"></a>

```typescript
public prehook(service: Service, scope: Construct): void
```

A hook that is called for each extension ahead of time to allow for any initial setup, such as creating resources in advance.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.prehook.parameter.service"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a>

---

###### `scope`<sup>Required</sup> <a name="scope" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.prehook.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `resolveContainerDependencies` <a name="resolveContainerDependencies" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.resolveContainerDependencies"></a>

```typescript
public resolveContainerDependencies(): void
```

Once all containers are added to the task definition, this hook is called for each extension to give it a chance to resolve its dependency graph so that its container starts in the right order based on the other extensions that were enabled.

##### `useService` <a name="useService" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.useService"></a>

```typescript
public useService(service: Ec2Service | FargateService): void
```

When this hook is implemented by extension, it allows the extension to use the service which has been created.

It is generally used to
create any final resources which might depend on the service itself.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.useService.parameter.service"></a>

- *Type:* aws-cdk-lib.aws_ecs.Ec2Service | aws-cdk-lib.aws_ecs.FargateService

---

##### `useTaskDefinition` <a name="useTaskDefinition" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.useTaskDefinition"></a>

```typescript
public useTaskDefinition(taskDefinition: TaskDefinition): void
```

Once the task definition is created, this hook is called for each extension to give it a chance to add containers to the task definition, change the task definition's role to add permissions, etc.

###### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.useTaskDefinition.parameter.taskDefinition"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinition

The created task definition to add containers to.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.property.name">name</a></code> | <code>string</code> | The name of the extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.property.container">container</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerDefinition</code> | The container for this extension. |

---

##### `name`<sup>Required</sup> <a name="name" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the extension.

---

##### `container`<sup>Optional</sup> <a name="container" id="@aws-cdk-containers/ecs-service-extensions.HttpLoadBalancerExtension.property.container"></a>

```typescript
public readonly container: ContainerDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerDefinition

The container for this extension.

Most extensions have a container, but not
every extension is required to have a container. Some extensions may just
modify the properties of the service, or create external resources
connected to the service.

---


### InjectableTopic <a name="InjectableTopic" id="@aws-cdk-containers/ecs-service-extensions.InjectableTopic"></a>

- *Implements:* <a href="#@aws-cdk-containers/ecs-service-extensions.IGrantInjectable">IGrantInjectable</a>

The `InjectableTopic` class represents SNS Topic resource that can be published events to by the parent service.

#### Initializers <a name="Initializers" id="@aws-cdk-containers/ecs-service-extensions.InjectableTopic.Initializer"></a>

```typescript
import { InjectableTopic } from '@aws-cdk-containers/ecs-service-extensions'

new InjectableTopic(props: InjectableTopicProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.InjectableTopic.Initializer.parameter.props">props</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.InjectableTopicProps">InjectableTopicProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.InjectableTopic.Initializer.parameter.props"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.InjectableTopicProps">InjectableTopicProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.InjectableTopic.environmentVariables">environmentVariables</a></code> | *No description.* |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.InjectableTopic.grant">grant</a></code> | *No description.* |

---

##### `environmentVariables` <a name="environmentVariables" id="@aws-cdk-containers/ecs-service-extensions.InjectableTopic.environmentVariables"></a>

```typescript
public environmentVariables(): {[ key: string ]: string}
```

##### `grant` <a name="grant" id="@aws-cdk-containers/ecs-service-extensions.InjectableTopic.grant"></a>

```typescript
public grant(taskDefinition: TaskDefinition): void
```

###### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@aws-cdk-containers/ecs-service-extensions.InjectableTopic.grant.parameter.taskDefinition"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinition

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.InjectableTopic.property.topic">topic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | *No description.* |

---

##### `topic`<sup>Required</sup> <a name="topic" id="@aws-cdk-containers/ecs-service-extensions.InjectableTopic.property.topic"></a>

```typescript
public readonly topic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic

---


### InjecterExtension <a name="InjecterExtension" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtension"></a>

This extension accepts a list of `Injectable` resources that the parent service can publish events or write data to.

It sets up the corresponding permissions for the task role of the parent service.

#### Initializers <a name="Initializers" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtension.Initializer"></a>

```typescript
import { InjecterExtension } from '@aws-cdk-containers/ecs-service-extensions'

new InjecterExtension(props: InjecterExtensionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.InjecterExtension.Initializer.parameter.props">props</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.InjecterExtensionProps">InjecterExtensionProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtension.Initializer.parameter.props"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.InjecterExtensionProps">InjecterExtensionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.InjecterExtension.addContainerMutatingHook">addContainerMutatingHook</a></code> | This hook allows another service extension to register a mutating hook for changing the primary container of this extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.InjecterExtension.addHooks">addHooks</a></code> | Add hooks to the main application extension so that it is modified to add the injectable resource environment variables to the container environment. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.InjecterExtension.connectToService">connectToService</a></code> | This hook allows the extension to establish a connection to extensions from another service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.InjecterExtension.modifyServiceProps">modifyServiceProps</a></code> | Prior to launching the task definition as a service, this hook is called on each extension to give it a chance to mutate the properties of the service to be created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.InjecterExtension.modifyTaskDefinitionProps">modifyTaskDefinitionProps</a></code> | This is a hook which allows extensions to modify the settings of the task definition prior to it being created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.InjecterExtension.prehook">prehook</a></code> | A hook that is called for each extension ahead of time to allow for any initial setup, such as creating resources in advance. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.InjecterExtension.resolveContainerDependencies">resolveContainerDependencies</a></code> | Once all containers are added to the task definition, this hook is called for each extension to give it a chance to resolve its dependency graph so that its container starts in the right order based on the other extensions that were enabled. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.InjecterExtension.useService">useService</a></code> | When this hook is implemented by extension, it allows the extension to use the service which has been created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.InjecterExtension.useTaskDefinition">useTaskDefinition</a></code> | After the task definition has been created, this hook grants the required permissions to the task role for the parent service. |

---

##### `addContainerMutatingHook` <a name="addContainerMutatingHook" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtension.addContainerMutatingHook"></a>

```typescript
public addContainerMutatingHook(hook: ContainerMutatingHook): void
```

This hook allows another service extension to register a mutating hook for changing the primary container of this extension.

This is primarily used
for the application extension. For example, the Firelens extension wants to
be able to modify the settings of the application container to
route logs through Firelens.

###### `hook`<sup>Required</sup> <a name="hook" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtension.addContainerMutatingHook.parameter.hook"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ContainerMutatingHook">ContainerMutatingHook</a>

---

##### `addHooks` <a name="addHooks" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtension.addHooks"></a>

```typescript
public addHooks(): void
```

Add hooks to the main application extension so that it is modified to add the injectable resource environment variables to the container environment.

##### `connectToService` <a name="connectToService" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtension.connectToService"></a>

```typescript
public connectToService(service: Service, connectToProps?: ConnectToProps): void
```

This hook allows the extension to establish a connection to extensions from another service.

Usually used for things like
allowing one service to talk to the load balancer or service mesh
proxy for another service.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtension.connectToService.parameter.service"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a>

The other service to connect to.

---

###### `connectToProps`<sup>Optional</sup> <a name="connectToProps" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtension.connectToService.parameter.connectToProps"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ConnectToProps">ConnectToProps</a>

---

##### `modifyServiceProps` <a name="modifyServiceProps" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtension.modifyServiceProps"></a>

```typescript
public modifyServiceProps(props: ServiceBuild): ServiceBuild
```

Prior to launching the task definition as a service, this hook is called on each extension to give it a chance to mutate the properties of the service to be created.

###### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtension.modifyServiceProps.parameter.props"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ServiceBuild">ServiceBuild</a>

The service properties to mutate.

---

##### `modifyTaskDefinitionProps` <a name="modifyTaskDefinitionProps" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtension.modifyTaskDefinitionProps"></a>

```typescript
public modifyTaskDefinitionProps(props: TaskDefinitionProps): TaskDefinitionProps
```

This is a hook which allows extensions to modify the settings of the task definition prior to it being created.

For example, the App Mesh
extension needs to configure an Envoy proxy in the task definition,
or the Application extension wants to set the overall resource for
the task.

###### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtension.modifyTaskDefinitionProps.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinitionProps

Properties of the task definition to be created.

---

##### `prehook` <a name="prehook" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtension.prehook"></a>

```typescript
public prehook(service: Service, scope: Construct): void
```

A hook that is called for each extension ahead of time to allow for any initial setup, such as creating resources in advance.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtension.prehook.parameter.service"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a>

---

###### `scope`<sup>Required</sup> <a name="scope" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtension.prehook.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `resolveContainerDependencies` <a name="resolveContainerDependencies" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtension.resolveContainerDependencies"></a>

```typescript
public resolveContainerDependencies(): void
```

Once all containers are added to the task definition, this hook is called for each extension to give it a chance to resolve its dependency graph so that its container starts in the right order based on the other extensions that were enabled.

##### `useService` <a name="useService" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtension.useService"></a>

```typescript
public useService(service: Ec2Service | FargateService): void
```

When this hook is implemented by extension, it allows the extension to use the service which has been created.

It is generally used to
create any final resources which might depend on the service itself.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtension.useService.parameter.service"></a>

- *Type:* aws-cdk-lib.aws_ecs.Ec2Service | aws-cdk-lib.aws_ecs.FargateService

The generated service.

---

##### `useTaskDefinition` <a name="useTaskDefinition" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtension.useTaskDefinition"></a>

```typescript
public useTaskDefinition(taskDefinition: TaskDefinition): void
```

After the task definition has been created, this hook grants the required permissions to the task role for the parent service.

###### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtension.useTaskDefinition.parameter.taskDefinition"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinition

The created task definition.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.InjecterExtension.property.name">name</a></code> | <code>string</code> | The name of the extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.InjecterExtension.property.container">container</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerDefinition</code> | The container for this extension. |

---

##### `name`<sup>Required</sup> <a name="name" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the extension.

---

##### `container`<sup>Optional</sup> <a name="container" id="@aws-cdk-containers/ecs-service-extensions.InjecterExtension.property.container"></a>

```typescript
public readonly container: ContainerDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerDefinition

The container for this extension.

Most extensions have a container, but not
every extension is required to have a container. Some extensions may just
modify the properties of the service, or create external resources
connected to the service.

---


### QueueExtension <a name="QueueExtension" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension"></a>

This extension creates a default `eventsQueue` for the service (if not provided) and accepts a list of objects of type `ISubscribable` that the `eventsQueue` subscribes to.

It creates the subscriptions and sets up permissions
for the service to consume messages from the SQS Queues.

It also configures a target tracking scaling policy for the service to maintain an acceptable queue latency by tracking
the backlog per task. For more information, please refer: https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html .

The default queue for this service can be accessed using the getter `<extension>.eventsQueue`.

#### Initializers <a name="Initializers" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.Initializer"></a>

```typescript
import { QueueExtension } from '@aws-cdk-containers/ecs-service-extensions'

new QueueExtension(props?: QueueExtensionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.QueueExtension.Initializer.parameter.props">props</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.QueueExtensionProps">QueueExtensionProps</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.Initializer.parameter.props"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.QueueExtensionProps">QueueExtensionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.QueueExtension.addContainerMutatingHook">addContainerMutatingHook</a></code> | This hook allows another service extension to register a mutating hook for changing the primary container of this extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.QueueExtension.addHooks">addHooks</a></code> | Add hooks to the main application extension so that it is modified to add the events queue URL to the container environment. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.QueueExtension.connectToService">connectToService</a></code> | This hook allows the extension to establish a connection to extensions from another service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.QueueExtension.modifyServiceProps">modifyServiceProps</a></code> | Prior to launching the task definition as a service, this hook is called on each extension to give it a chance to mutate the properties of the service to be created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.QueueExtension.modifyTaskDefinitionProps">modifyTaskDefinitionProps</a></code> | This is a hook which allows extensions to modify the settings of the task definition prior to it being created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.QueueExtension.prehook">prehook</a></code> | This hook creates (if required) and sets the default queue `eventsQueue`. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.QueueExtension.resolveContainerDependencies">resolveContainerDependencies</a></code> | Once all containers are added to the task definition, this hook is called for each extension to give it a chance to resolve its dependency graph so that its container starts in the right order based on the other extensions that were enabled. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.QueueExtension.useService">useService</a></code> | When this hook is implemented by extension, it allows the extension to use the service which has been created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.QueueExtension.useTaskDefinition">useTaskDefinition</a></code> | After the task definition has been created, this hook grants SQS permissions to the task role. |

---

##### `addContainerMutatingHook` <a name="addContainerMutatingHook" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.addContainerMutatingHook"></a>

```typescript
public addContainerMutatingHook(hook: ContainerMutatingHook): void
```

This hook allows another service extension to register a mutating hook for changing the primary container of this extension.

This is primarily used
for the application extension. For example, the Firelens extension wants to
be able to modify the settings of the application container to
route logs through Firelens.

###### `hook`<sup>Required</sup> <a name="hook" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.addContainerMutatingHook.parameter.hook"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ContainerMutatingHook">ContainerMutatingHook</a>

---

##### `addHooks` <a name="addHooks" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.addHooks"></a>

```typescript
public addHooks(): void
```

Add hooks to the main application extension so that it is modified to add the events queue URL to the container environment.

##### `connectToService` <a name="connectToService" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.connectToService"></a>

```typescript
public connectToService(service: Service, connectToProps?: ConnectToProps): void
```

This hook allows the extension to establish a connection to extensions from another service.

Usually used for things like
allowing one service to talk to the load balancer or service mesh
proxy for another service.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.connectToService.parameter.service"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a>

The other service to connect to.

---

###### `connectToProps`<sup>Optional</sup> <a name="connectToProps" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.connectToService.parameter.connectToProps"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ConnectToProps">ConnectToProps</a>

---

##### `modifyServiceProps` <a name="modifyServiceProps" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.modifyServiceProps"></a>

```typescript
public modifyServiceProps(props: ServiceBuild): ServiceBuild
```

Prior to launching the task definition as a service, this hook is called on each extension to give it a chance to mutate the properties of the service to be created.

###### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.modifyServiceProps.parameter.props"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ServiceBuild">ServiceBuild</a>

The service properties to mutate.

---

##### `modifyTaskDefinitionProps` <a name="modifyTaskDefinitionProps" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.modifyTaskDefinitionProps"></a>

```typescript
public modifyTaskDefinitionProps(props: TaskDefinitionProps): TaskDefinitionProps
```

This is a hook which allows extensions to modify the settings of the task definition prior to it being created.

For example, the App Mesh
extension needs to configure an Envoy proxy in the task definition,
or the Application extension wants to set the overall resource for
the task.

###### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.modifyTaskDefinitionProps.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinitionProps

Properties of the task definition to be created.

---

##### `prehook` <a name="prehook" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.prehook"></a>

```typescript
public prehook(service: Service, scope: Construct): void
```

This hook creates (if required) and sets the default queue `eventsQueue`.

It also sets up the subscriptions for
the provided `ISubscribable` objects.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.prehook.parameter.service"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a>

The parent service which this extension has been added to.

---

###### `scope`<sup>Required</sup> <a name="scope" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.prehook.parameter.scope"></a>

- *Type:* constructs.Construct

The scope that this extension should create resources in.

---

##### `resolveContainerDependencies` <a name="resolveContainerDependencies" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.resolveContainerDependencies"></a>

```typescript
public resolveContainerDependencies(): void
```

Once all containers are added to the task definition, this hook is called for each extension to give it a chance to resolve its dependency graph so that its container starts in the right order based on the other extensions that were enabled.

##### `useService` <a name="useService" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.useService"></a>

```typescript
public useService(service: Ec2Service | FargateService): void
```

When this hook is implemented by extension, it allows the extension to use the service which has been created.

It is used to add target tracking
scaling policies for the SQS Queues of the service. It also creates an AWS Lambda
Function for calculating the backlog per task metric.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.useService.parameter.service"></a>

- *Type:* aws-cdk-lib.aws_ecs.Ec2Service | aws-cdk-lib.aws_ecs.FargateService

The generated service.

---

##### `useTaskDefinition` <a name="useTaskDefinition" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.useTaskDefinition"></a>

```typescript
public useTaskDefinition(taskDefinition: TaskDefinition): void
```

After the task definition has been created, this hook grants SQS permissions to the task role.

###### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.useTaskDefinition.parameter.taskDefinition"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinition

The created task definition.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.QueueExtension.property.name">name</a></code> | <code>string</code> | The name of the extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.QueueExtension.property.container">container</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerDefinition</code> | The container for this extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.QueueExtension.property.eventsQueue">eventsQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | *No description.* |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.QueueExtension.property.autoscalingOptions">autoscalingOptions</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.QueueAutoScalingOptions">QueueAutoScalingOptions</a></code> | *No description.* |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.QueueExtension.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The log group created by the extension where the AWS Lambda function logs are stored. |

---

##### `name`<sup>Required</sup> <a name="name" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the extension.

---

##### `container`<sup>Optional</sup> <a name="container" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.property.container"></a>

```typescript
public readonly container: ContainerDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerDefinition

The container for this extension.

Most extensions have a container, but not
every extension is required to have a container. Some extensions may just
modify the properties of the service, or create external resources
connected to the service.

---

##### `eventsQueue`<sup>Required</sup> <a name="eventsQueue" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.property.eventsQueue"></a>

```typescript
public readonly eventsQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

---

##### `autoscalingOptions`<sup>Optional</sup> <a name="autoscalingOptions" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.property.autoscalingOptions"></a>

```typescript
public readonly autoscalingOptions: QueueAutoScalingOptions;
```

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.QueueAutoScalingOptions">QueueAutoScalingOptions</a>

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@aws-cdk-containers/ecs-service-extensions.QueueExtension.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The log group created by the extension where the AWS Lambda function logs are stored.

---


### ScaleOnCpuUtilization <a name="ScaleOnCpuUtilization" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization"></a>

This extension helps you scale your service according to CPU utilization.

#### Initializers <a name="Initializers" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.Initializer"></a>

```typescript
import { ScaleOnCpuUtilization } from '@aws-cdk-containers/ecs-service-extensions'

new ScaleOnCpuUtilization(props?: CpuScalingProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.Initializer.parameter.props">props</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.CpuScalingProps">CpuScalingProps</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.Initializer.parameter.props"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.CpuScalingProps">CpuScalingProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.addContainerMutatingHook">addContainerMutatingHook</a></code> | This hook allows another service extension to register a mutating hook for changing the primary container of this extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.addHooks">addHooks</a></code> | A hook that allows the extension to add hooks to other extensions that are registered. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.connectToService">connectToService</a></code> | This hook allows the extension to establish a connection to extensions from another service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.modifyServiceProps">modifyServiceProps</a></code> | Prior to launching the task definition as a service, this hook is called on each extension to give it a chance to mutate the properties of the service to be created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.modifyTaskDefinitionProps">modifyTaskDefinitionProps</a></code> | This is a hook which allows extensions to modify the settings of the task definition prior to it being created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.prehook">prehook</a></code> | A hook that is called for each extension ahead of time to allow for any initial setup, such as creating resources in advance. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.resolveContainerDependencies">resolveContainerDependencies</a></code> | Once all containers are added to the task definition, this hook is called for each extension to give it a chance to resolve its dependency graph so that its container starts in the right order based on the other extensions that were enabled. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.useService">useService</a></code> | When this hook is implemented by extension, it allows the extension to use the service which has been created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.useTaskDefinition">useTaskDefinition</a></code> | Once the task definition is created, this hook is called for each extension to give it a chance to add containers to the task definition, change the task definition's role to add permissions, etc. |

---

##### ~~`addContainerMutatingHook`~~ <a name="addContainerMutatingHook" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.addContainerMutatingHook"></a>

```typescript
public addContainerMutatingHook(hook: ContainerMutatingHook): void
```

This hook allows another service extension to register a mutating hook for changing the primary container of this extension.

This is primarily used
for the application extension. For example, the Firelens extension wants to
be able to modify the settings of the application container to
route logs through Firelens.

###### `hook`<sup>Required</sup> <a name="hook" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.addContainerMutatingHook.parameter.hook"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ContainerMutatingHook">ContainerMutatingHook</a>

---

##### ~~`addHooks`~~ <a name="addHooks" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.addHooks"></a>

```typescript
public addHooks(): void
```

A hook that allows the extension to add hooks to other extensions that are registered.

##### ~~`connectToService`~~ <a name="connectToService" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.connectToService"></a>

```typescript
public connectToService(service: Service, connectToProps?: ConnectToProps): void
```

This hook allows the extension to establish a connection to extensions from another service.

Usually used for things like
allowing one service to talk to the load balancer or service mesh
proxy for another service.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.connectToService.parameter.service"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a>

The other service to connect to.

---

###### `connectToProps`<sup>Optional</sup> <a name="connectToProps" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.connectToService.parameter.connectToProps"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ConnectToProps">ConnectToProps</a>

---

##### ~~`modifyServiceProps`~~ <a name="modifyServiceProps" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.modifyServiceProps"></a>

```typescript
public modifyServiceProps(props: ServiceBuild): ServiceBuild
```

Prior to launching the task definition as a service, this hook is called on each extension to give it a chance to mutate the properties of the service to be created.

###### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.modifyServiceProps.parameter.props"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ServiceBuild">ServiceBuild</a>

---

##### ~~`modifyTaskDefinitionProps`~~ <a name="modifyTaskDefinitionProps" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.modifyTaskDefinitionProps"></a>

```typescript
public modifyTaskDefinitionProps(props: TaskDefinitionProps): TaskDefinitionProps
```

This is a hook which allows extensions to modify the settings of the task definition prior to it being created.

For example, the App Mesh
extension needs to configure an Envoy proxy in the task definition,
or the Application extension wants to set the overall resource for
the task.

###### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.modifyTaskDefinitionProps.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinitionProps

Properties of the task definition to be created.

---

##### ~~`prehook`~~ <a name="prehook" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.prehook"></a>

```typescript
public prehook(parent: Service, scope: Construct): void
```

A hook that is called for each extension ahead of time to allow for any initial setup, such as creating resources in advance.

###### `parent`<sup>Required</sup> <a name="parent" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.prehook.parameter.parent"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a>

The parent service which this extension has been added to.

---

###### `scope`<sup>Required</sup> <a name="scope" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.prehook.parameter.scope"></a>

- *Type:* constructs.Construct

The scope that this extension should create resources in.

---

##### ~~`resolveContainerDependencies`~~ <a name="resolveContainerDependencies" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.resolveContainerDependencies"></a>

```typescript
public resolveContainerDependencies(): void
```

Once all containers are added to the task definition, this hook is called for each extension to give it a chance to resolve its dependency graph so that its container starts in the right order based on the other extensions that were enabled.

##### ~~`useService`~~ <a name="useService" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.useService"></a>

```typescript
public useService(service: Ec2Service | FargateService): void
```

When this hook is implemented by extension, it allows the extension to use the service which has been created.

It is generally used to
create any final resources which might depend on the service itself.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.useService.parameter.service"></a>

- *Type:* aws-cdk-lib.aws_ecs.Ec2Service | aws-cdk-lib.aws_ecs.FargateService

---

##### ~~`useTaskDefinition`~~ <a name="useTaskDefinition" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.useTaskDefinition"></a>

```typescript
public useTaskDefinition(taskDefinition: TaskDefinition): void
```

Once the task definition is created, this hook is called for each extension to give it a chance to add containers to the task definition, change the task definition's role to add permissions, etc.

###### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.useTaskDefinition.parameter.taskDefinition"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinition

The created task definition to add containers to.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.property.name">name</a></code> | <code>string</code> | The name of the extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.property.container">container</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerDefinition</code> | The container for this extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.property.initialTaskCount">initialTaskCount</a></code> | <code>number</code> | How many tasks to launch initially. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.property.maxTaskCount">maxTaskCount</a></code> | <code>number</code> | The maximum number of tasks when scaling out. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.property.minTaskCount">minTaskCount</a></code> | <code>number</code> | The minimum number of tasks when scaling in. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.property.scaleInCooldown">scaleInCooldown</a></code> | <code>aws-cdk-lib.Duration</code> | How long to wait between scale in actions. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.property.scaleOutCooldown">scaleOutCooldown</a></code> | <code>aws-cdk-lib.Duration</code> | How long to wait between scale out actions. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.property.targetCpuUtilization">targetCpuUtilization</a></code> | <code>number</code> | The CPU utilization to try ot maintain. |

---

##### ~~`name`~~<sup>Required</sup> <a name="name" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.property.name"></a>

- *Deprecated:* To enable target tracking based on CPU utilization, use the `targetCpuUtilization` property of `autoScaleTaskCount` in the `Service` construct.
For more information, please refer https://github.com/aws/aws-cdk/blob/master/packages/%40aws-cdk-containers/ecs-service-extensions/README.md#task-auto-scaling .

```typescript
public readonly name: string;
```

- *Type:* string

The name of the extension.

---

##### ~~`container`~~<sup>Optional</sup> <a name="container" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.property.container"></a>

- *Deprecated:* To enable target tracking based on CPU utilization, use the `targetCpuUtilization` property of `autoScaleTaskCount` in the `Service` construct.
For more information, please refer https://github.com/aws/aws-cdk/blob/master/packages/%40aws-cdk-containers/ecs-service-extensions/README.md#task-auto-scaling .

```typescript
public readonly container: ContainerDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerDefinition

The container for this extension.

Most extensions have a container, but not
every extension is required to have a container. Some extensions may just
modify the properties of the service, or create external resources
connected to the service.

---

##### ~~`initialTaskCount`~~<sup>Required</sup> <a name="initialTaskCount" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.property.initialTaskCount"></a>

- *Deprecated:* To enable target tracking based on CPU utilization, use the `targetCpuUtilization` property of `autoScaleTaskCount` in the `Service` construct.
For more information, please refer https://github.com/aws/aws-cdk/blob/master/packages/%40aws-cdk-containers/ecs-service-extensions/README.md#task-auto-scaling .

```typescript
public readonly initialTaskCount: number;
```

- *Type:* number

How many tasks to launch initially.

---

##### ~~`maxTaskCount`~~<sup>Required</sup> <a name="maxTaskCount" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.property.maxTaskCount"></a>

- *Deprecated:* To enable target tracking based on CPU utilization, use the `targetCpuUtilization` property of `autoScaleTaskCount` in the `Service` construct.
For more information, please refer https://github.com/aws/aws-cdk/blob/master/packages/%40aws-cdk-containers/ecs-service-extensions/README.md#task-auto-scaling .

```typescript
public readonly maxTaskCount: number;
```

- *Type:* number

The maximum number of tasks when scaling out.

---

##### ~~`minTaskCount`~~<sup>Required</sup> <a name="minTaskCount" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.property.minTaskCount"></a>

- *Deprecated:* To enable target tracking based on CPU utilization, use the `targetCpuUtilization` property of `autoScaleTaskCount` in the `Service` construct.
For more information, please refer https://github.com/aws/aws-cdk/blob/master/packages/%40aws-cdk-containers/ecs-service-extensions/README.md#task-auto-scaling .

```typescript
public readonly minTaskCount: number;
```

- *Type:* number

The minimum number of tasks when scaling in.

---

##### ~~`scaleInCooldown`~~<sup>Required</sup> <a name="scaleInCooldown" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.property.scaleInCooldown"></a>

- *Deprecated:* To enable target tracking based on CPU utilization, use the `targetCpuUtilization` property of `autoScaleTaskCount` in the `Service` construct.
For more information, please refer https://github.com/aws/aws-cdk/blob/master/packages/%40aws-cdk-containers/ecs-service-extensions/README.md#task-auto-scaling .

```typescript
public readonly scaleInCooldown: Duration;
```

- *Type:* aws-cdk-lib.Duration

How long to wait between scale in actions.

---

##### ~~`scaleOutCooldown`~~<sup>Required</sup> <a name="scaleOutCooldown" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.property.scaleOutCooldown"></a>

- *Deprecated:* To enable target tracking based on CPU utilization, use the `targetCpuUtilization` property of `autoScaleTaskCount` in the `Service` construct.
For more information, please refer https://github.com/aws/aws-cdk/blob/master/packages/%40aws-cdk-containers/ecs-service-extensions/README.md#task-auto-scaling .

```typescript
public readonly scaleOutCooldown: Duration;
```

- *Type:* aws-cdk-lib.Duration

How long to wait between scale out actions.

---

##### ~~`targetCpuUtilization`~~<sup>Required</sup> <a name="targetCpuUtilization" id="@aws-cdk-containers/ecs-service-extensions.ScaleOnCpuUtilization.property.targetCpuUtilization"></a>

- *Deprecated:* To enable target tracking based on CPU utilization, use the `targetCpuUtilization` property of `autoScaleTaskCount` in the `Service` construct.
For more information, please refer https://github.com/aws/aws-cdk/blob/master/packages/%40aws-cdk-containers/ecs-service-extensions/README.md#task-auto-scaling .

```typescript
public readonly targetCpuUtilization: number;
```

- *Type:* number

The CPU utilization to try ot maintain.

---


### ServiceDescription <a name="ServiceDescription" id="@aws-cdk-containers/ecs-service-extensions.ServiceDescription"></a>

A ServiceDescription is a wrapper for all of the extensions that a user wants to add to an ECS Service.

It collects all of the extensions that are added
to a service, allowing each extension to query the full list of extensions
added to a service to determine information about how to self-configure.

#### Initializers <a name="Initializers" id="@aws-cdk-containers/ecs-service-extensions.ServiceDescription.Initializer"></a>

```typescript
import { ServiceDescription } from '@aws-cdk-containers/ecs-service-extensions'

new ServiceDescription()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceDescription.add">add</a></code> | Adds a new extension to the service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceDescription.get">get</a></code> | Get the extension with a specific name. |

---

##### `add` <a name="add" id="@aws-cdk-containers/ecs-service-extensions.ServiceDescription.add"></a>

```typescript
public add(extension: ServiceExtension): ServiceDescription
```

Adds a new extension to the service.

The extensions mutate a service
to add resources to or configure properties for the service.

###### `extension`<sup>Required</sup> <a name="extension" id="@aws-cdk-containers/ecs-service-extensions.ServiceDescription.add.parameter.extension"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ServiceExtension">ServiceExtension</a>

The extension that you wish to add.

---

##### `get` <a name="get" id="@aws-cdk-containers/ecs-service-extensions.ServiceDescription.get"></a>

```typescript
public get(name: string): ServiceExtension
```

Get the extension with a specific name.

This is generally used by
extensions in order to discover each other.

###### `name`<sup>Required</sup> <a name="name" id="@aws-cdk-containers/ecs-service-extensions.ServiceDescription.get.parameter.name"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceDescription.property.extensions">extensions</a></code> | <code>{[ key: string ]: <a href="#@aws-cdk-containers/ecs-service-extensions.ServiceExtension">ServiceExtension</a>}</code> | The list of extensions that have been registered to run when preparing this service. |

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@aws-cdk-containers/ecs-service-extensions.ServiceDescription.property.extensions"></a>

```typescript
public readonly extensions: {[ key: string ]: ServiceExtension};
```

- *Type:* {[ key: string ]: <a href="#@aws-cdk-containers/ecs-service-extensions.ServiceExtension">ServiceExtension</a>}

The list of extensions that have been registered to run when preparing this service.

---


### ServiceExtension <a name="ServiceExtension" id="@aws-cdk-containers/ecs-service-extensions.ServiceExtension"></a>

The shape of a service extension.

This abstract class is implemented
by other extensions that extend the hooks to implement any custom
logic that they want to run during each step of preparing the service.

#### Initializers <a name="Initializers" id="@aws-cdk-containers/ecs-service-extensions.ServiceExtension.Initializer"></a>

```typescript
import { ServiceExtension } from '@aws-cdk-containers/ecs-service-extensions'

new ServiceExtension(name: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceExtension.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@aws-cdk-containers/ecs-service-extensions.ServiceExtension.Initializer.parameter.name"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceExtension.addContainerMutatingHook">addContainerMutatingHook</a></code> | This hook allows another service extension to register a mutating hook for changing the primary container of this extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceExtension.addHooks">addHooks</a></code> | A hook that allows the extension to add hooks to other extensions that are registered. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceExtension.connectToService">connectToService</a></code> | This hook allows the extension to establish a connection to extensions from another service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceExtension.modifyServiceProps">modifyServiceProps</a></code> | Prior to launching the task definition as a service, this hook is called on each extension to give it a chance to mutate the properties of the service to be created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceExtension.modifyTaskDefinitionProps">modifyTaskDefinitionProps</a></code> | This is a hook which allows extensions to modify the settings of the task definition prior to it being created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceExtension.prehook">prehook</a></code> | A hook that is called for each extension ahead of time to allow for any initial setup, such as creating resources in advance. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceExtension.resolveContainerDependencies">resolveContainerDependencies</a></code> | Once all containers are added to the task definition, this hook is called for each extension to give it a chance to resolve its dependency graph so that its container starts in the right order based on the other extensions that were enabled. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceExtension.useService">useService</a></code> | When this hook is implemented by extension, it allows the extension to use the service which has been created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceExtension.useTaskDefinition">useTaskDefinition</a></code> | Once the task definition is created, this hook is called for each extension to give it a chance to add containers to the task definition, change the task definition's role to add permissions, etc. |

---

##### `addContainerMutatingHook` <a name="addContainerMutatingHook" id="@aws-cdk-containers/ecs-service-extensions.ServiceExtension.addContainerMutatingHook"></a>

```typescript
public addContainerMutatingHook(hook: ContainerMutatingHook): void
```

This hook allows another service extension to register a mutating hook for changing the primary container of this extension.

This is primarily used
for the application extension. For example, the Firelens extension wants to
be able to modify the settings of the application container to
route logs through Firelens.

###### `hook`<sup>Required</sup> <a name="hook" id="@aws-cdk-containers/ecs-service-extensions.ServiceExtension.addContainerMutatingHook.parameter.hook"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ContainerMutatingHook">ContainerMutatingHook</a>

---

##### `addHooks` <a name="addHooks" id="@aws-cdk-containers/ecs-service-extensions.ServiceExtension.addHooks"></a>

```typescript
public addHooks(): void
```

A hook that allows the extension to add hooks to other extensions that are registered.

##### `connectToService` <a name="connectToService" id="@aws-cdk-containers/ecs-service-extensions.ServiceExtension.connectToService"></a>

```typescript
public connectToService(service: Service, connectToProps?: ConnectToProps): void
```

This hook allows the extension to establish a connection to extensions from another service.

Usually used for things like
allowing one service to talk to the load balancer or service mesh
proxy for another service.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.ServiceExtension.connectToService.parameter.service"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a>

The other service to connect to.

---

###### `connectToProps`<sup>Optional</sup> <a name="connectToProps" id="@aws-cdk-containers/ecs-service-extensions.ServiceExtension.connectToService.parameter.connectToProps"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ConnectToProps">ConnectToProps</a>

---

##### `modifyServiceProps` <a name="modifyServiceProps" id="@aws-cdk-containers/ecs-service-extensions.ServiceExtension.modifyServiceProps"></a>

```typescript
public modifyServiceProps(props: ServiceBuild): ServiceBuild
```

Prior to launching the task definition as a service, this hook is called on each extension to give it a chance to mutate the properties of the service to be created.

###### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.ServiceExtension.modifyServiceProps.parameter.props"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ServiceBuild">ServiceBuild</a>

The service properties to mutate.

---

##### `modifyTaskDefinitionProps` <a name="modifyTaskDefinitionProps" id="@aws-cdk-containers/ecs-service-extensions.ServiceExtension.modifyTaskDefinitionProps"></a>

```typescript
public modifyTaskDefinitionProps(props: TaskDefinitionProps): TaskDefinitionProps
```

This is a hook which allows extensions to modify the settings of the task definition prior to it being created.

For example, the App Mesh
extension needs to configure an Envoy proxy in the task definition,
or the Application extension wants to set the overall resource for
the task.

###### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.ServiceExtension.modifyTaskDefinitionProps.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinitionProps

Properties of the task definition to be created.

---

##### `prehook` <a name="prehook" id="@aws-cdk-containers/ecs-service-extensions.ServiceExtension.prehook"></a>

```typescript
public prehook(parent: Service, scope: Construct): void
```

A hook that is called for each extension ahead of time to allow for any initial setup, such as creating resources in advance.

###### `parent`<sup>Required</sup> <a name="parent" id="@aws-cdk-containers/ecs-service-extensions.ServiceExtension.prehook.parameter.parent"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a>

The parent service which this extension has been added to.

---

###### `scope`<sup>Required</sup> <a name="scope" id="@aws-cdk-containers/ecs-service-extensions.ServiceExtension.prehook.parameter.scope"></a>

- *Type:* constructs.Construct

The scope that this extension should create resources in.

---

##### `resolveContainerDependencies` <a name="resolveContainerDependencies" id="@aws-cdk-containers/ecs-service-extensions.ServiceExtension.resolveContainerDependencies"></a>

```typescript
public resolveContainerDependencies(): void
```

Once all containers are added to the task definition, this hook is called for each extension to give it a chance to resolve its dependency graph so that its container starts in the right order based on the other extensions that were enabled.

##### `useService` <a name="useService" id="@aws-cdk-containers/ecs-service-extensions.ServiceExtension.useService"></a>

```typescript
public useService(service: Ec2Service | FargateService): void
```

When this hook is implemented by extension, it allows the extension to use the service which has been created.

It is generally used to
create any final resources which might depend on the service itself.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.ServiceExtension.useService.parameter.service"></a>

- *Type:* aws-cdk-lib.aws_ecs.Ec2Service | aws-cdk-lib.aws_ecs.FargateService

The generated service.

---

##### `useTaskDefinition` <a name="useTaskDefinition" id="@aws-cdk-containers/ecs-service-extensions.ServiceExtension.useTaskDefinition"></a>

```typescript
public useTaskDefinition(taskDefinition: TaskDefinition): void
```

Once the task definition is created, this hook is called for each extension to give it a chance to add containers to the task definition, change the task definition's role to add permissions, etc.

###### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@aws-cdk-containers/ecs-service-extensions.ServiceExtension.useTaskDefinition.parameter.taskDefinition"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinition

The created task definition to add containers to.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceExtension.property.name">name</a></code> | <code>string</code> | The name of the extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ServiceExtension.property.container">container</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerDefinition</code> | The container for this extension. |

---

##### `name`<sup>Required</sup> <a name="name" id="@aws-cdk-containers/ecs-service-extensions.ServiceExtension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the extension.

---

##### `container`<sup>Optional</sup> <a name="container" id="@aws-cdk-containers/ecs-service-extensions.ServiceExtension.property.container"></a>

```typescript
public readonly container: ContainerDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerDefinition

The container for this extension.

Most extensions have a container, but not
every extension is required to have a container. Some extensions may just
modify the properties of the service, or create external resources
connected to the service.

---


### TopicSubscription <a name="TopicSubscription" id="@aws-cdk-containers/ecs-service-extensions.TopicSubscription"></a>

- *Implements:* <a href="#@aws-cdk-containers/ecs-service-extensions.ISubscribable">ISubscribable</a>

The `TopicSubscription` class represents an SNS Topic resource that can be subscribed to by the service queues.

#### Initializers <a name="Initializers" id="@aws-cdk-containers/ecs-service-extensions.TopicSubscription.Initializer"></a>

```typescript
import { TopicSubscription } from '@aws-cdk-containers/ecs-service-extensions'

new TopicSubscription(props: TopicSubscriptionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.TopicSubscription.Initializer.parameter.props">props</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.TopicSubscriptionProps">TopicSubscriptionProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.TopicSubscription.Initializer.parameter.props"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.TopicSubscriptionProps">TopicSubscriptionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.TopicSubscription.subscribe">subscribe</a></code> | This method sets up SNS Topic subscriptions for the SQS queue provided by the user. |

---

##### `subscribe` <a name="subscribe" id="@aws-cdk-containers/ecs-service-extensions.TopicSubscription.subscribe"></a>

```typescript
public subscribe(extension: QueueExtension): IQueue
```

This method sets up SNS Topic subscriptions for the SQS queue provided by the user.

If a `queue` is not provided,
the default `eventsQueue` subscribes to the given topic.

###### `extension`<sup>Required</sup> <a name="extension" id="@aws-cdk-containers/ecs-service-extensions.TopicSubscription.subscribe.parameter.extension"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.QueueExtension">QueueExtension</a>

`QueueExtension` added to the service.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.TopicSubscription.property.topic">topic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | *No description.* |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.TopicSubscription.property.queue">queue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The queue that subscribes to the given topic. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.TopicSubscription.property.subscriptionQueue">subscriptionQueue</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.SubscriptionQueue">SubscriptionQueue</a></code> | The subscription queue object for this subscription. |

---

##### `topic`<sup>Required</sup> <a name="topic" id="@aws-cdk-containers/ecs-service-extensions.TopicSubscription.property.topic"></a>

```typescript
public readonly topic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic

---

##### ~~`queue`~~<sup>Optional</sup> <a name="queue" id="@aws-cdk-containers/ecs-service-extensions.TopicSubscription.property.queue"></a>

- *Deprecated:* use `subscriptionQueue`

```typescript
public readonly queue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue
- *Default:* none

The queue that subscribes to the given topic.

---

##### `subscriptionQueue`<sup>Optional</sup> <a name="subscriptionQueue" id="@aws-cdk-containers/ecs-service-extensions.TopicSubscription.property.subscriptionQueue"></a>

```typescript
public readonly subscriptionQueue: SubscriptionQueue;
```

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.SubscriptionQueue">SubscriptionQueue</a>
- *Default:* none

The subscription queue object for this subscription.

---


### XRayExtension <a name="XRayExtension" id="@aws-cdk-containers/ecs-service-extensions.XRayExtension"></a>

This extension adds an X-Ray daemon inside the task definition for capturing application trace spans and submitting them to the AWS X-Ray service.

#### Initializers <a name="Initializers" id="@aws-cdk-containers/ecs-service-extensions.XRayExtension.Initializer"></a>

```typescript
import { XRayExtension } from '@aws-cdk-containers/ecs-service-extensions'

new XRayExtension()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.XRayExtension.addContainerMutatingHook">addContainerMutatingHook</a></code> | This hook allows another service extension to register a mutating hook for changing the primary container of this extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.XRayExtension.addHooks">addHooks</a></code> | A hook that allows the extension to add hooks to other extensions that are registered. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.XRayExtension.connectToService">connectToService</a></code> | This hook allows the extension to establish a connection to extensions from another service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.XRayExtension.modifyServiceProps">modifyServiceProps</a></code> | Prior to launching the task definition as a service, this hook is called on each extension to give it a chance to mutate the properties of the service to be created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.XRayExtension.modifyTaskDefinitionProps">modifyTaskDefinitionProps</a></code> | This is a hook which allows extensions to modify the settings of the task definition prior to it being created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.XRayExtension.prehook">prehook</a></code> | A hook that is called for each extension ahead of time to allow for any initial setup, such as creating resources in advance. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.XRayExtension.resolveContainerDependencies">resolveContainerDependencies</a></code> | Once all containers are added to the task definition, this hook is called for each extension to give it a chance to resolve its dependency graph so that its container starts in the right order based on the other extensions that were enabled. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.XRayExtension.useService">useService</a></code> | When this hook is implemented by extension, it allows the extension to use the service which has been created. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.XRayExtension.useTaskDefinition">useTaskDefinition</a></code> | Once the task definition is created, this hook is called for each extension to give it a chance to add containers to the task definition, change the task definition's role to add permissions, etc. |

---

##### `addContainerMutatingHook` <a name="addContainerMutatingHook" id="@aws-cdk-containers/ecs-service-extensions.XRayExtension.addContainerMutatingHook"></a>

```typescript
public addContainerMutatingHook(hook: ContainerMutatingHook): void
```

This hook allows another service extension to register a mutating hook for changing the primary container of this extension.

This is primarily used
for the application extension. For example, the Firelens extension wants to
be able to modify the settings of the application container to
route logs through Firelens.

###### `hook`<sup>Required</sup> <a name="hook" id="@aws-cdk-containers/ecs-service-extensions.XRayExtension.addContainerMutatingHook.parameter.hook"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ContainerMutatingHook">ContainerMutatingHook</a>

---

##### `addHooks` <a name="addHooks" id="@aws-cdk-containers/ecs-service-extensions.XRayExtension.addHooks"></a>

```typescript
public addHooks(): void
```

A hook that allows the extension to add hooks to other extensions that are registered.

##### `connectToService` <a name="connectToService" id="@aws-cdk-containers/ecs-service-extensions.XRayExtension.connectToService"></a>

```typescript
public connectToService(service: Service, connectToProps?: ConnectToProps): void
```

This hook allows the extension to establish a connection to extensions from another service.

Usually used for things like
allowing one service to talk to the load balancer or service mesh
proxy for another service.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.XRayExtension.connectToService.parameter.service"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a>

The other service to connect to.

---

###### `connectToProps`<sup>Optional</sup> <a name="connectToProps" id="@aws-cdk-containers/ecs-service-extensions.XRayExtension.connectToService.parameter.connectToProps"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ConnectToProps">ConnectToProps</a>

---

##### `modifyServiceProps` <a name="modifyServiceProps" id="@aws-cdk-containers/ecs-service-extensions.XRayExtension.modifyServiceProps"></a>

```typescript
public modifyServiceProps(props: ServiceBuild): ServiceBuild
```

Prior to launching the task definition as a service, this hook is called on each extension to give it a chance to mutate the properties of the service to be created.

###### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.XRayExtension.modifyServiceProps.parameter.props"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.ServiceBuild">ServiceBuild</a>

The service properties to mutate.

---

##### `modifyTaskDefinitionProps` <a name="modifyTaskDefinitionProps" id="@aws-cdk-containers/ecs-service-extensions.XRayExtension.modifyTaskDefinitionProps"></a>

```typescript
public modifyTaskDefinitionProps(props: TaskDefinitionProps): TaskDefinitionProps
```

This is a hook which allows extensions to modify the settings of the task definition prior to it being created.

For example, the App Mesh
extension needs to configure an Envoy proxy in the task definition,
or the Application extension wants to set the overall resource for
the task.

###### `props`<sup>Required</sup> <a name="props" id="@aws-cdk-containers/ecs-service-extensions.XRayExtension.modifyTaskDefinitionProps.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinitionProps

Properties of the task definition to be created.

---

##### `prehook` <a name="prehook" id="@aws-cdk-containers/ecs-service-extensions.XRayExtension.prehook"></a>

```typescript
public prehook(service: Service, scope: Construct): void
```

A hook that is called for each extension ahead of time to allow for any initial setup, such as creating resources in advance.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.XRayExtension.prehook.parameter.service"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.Service">Service</a>

---

###### `scope`<sup>Required</sup> <a name="scope" id="@aws-cdk-containers/ecs-service-extensions.XRayExtension.prehook.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `resolveContainerDependencies` <a name="resolveContainerDependencies" id="@aws-cdk-containers/ecs-service-extensions.XRayExtension.resolveContainerDependencies"></a>

```typescript
public resolveContainerDependencies(): void
```

Once all containers are added to the task definition, this hook is called for each extension to give it a chance to resolve its dependency graph so that its container starts in the right order based on the other extensions that were enabled.

##### `useService` <a name="useService" id="@aws-cdk-containers/ecs-service-extensions.XRayExtension.useService"></a>

```typescript
public useService(service: Ec2Service | FargateService): void
```

When this hook is implemented by extension, it allows the extension to use the service which has been created.

It is generally used to
create any final resources which might depend on the service itself.

###### `service`<sup>Required</sup> <a name="service" id="@aws-cdk-containers/ecs-service-extensions.XRayExtension.useService.parameter.service"></a>

- *Type:* aws-cdk-lib.aws_ecs.Ec2Service | aws-cdk-lib.aws_ecs.FargateService

The generated service.

---

##### `useTaskDefinition` <a name="useTaskDefinition" id="@aws-cdk-containers/ecs-service-extensions.XRayExtension.useTaskDefinition"></a>

```typescript
public useTaskDefinition(taskDefinition: TaskDefinition): void
```

Once the task definition is created, this hook is called for each extension to give it a chance to add containers to the task definition, change the task definition's role to add permissions, etc.

###### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@aws-cdk-containers/ecs-service-extensions.XRayExtension.useTaskDefinition.parameter.taskDefinition"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinition

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.XRayExtension.property.name">name</a></code> | <code>string</code> | The name of the extension. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.XRayExtension.property.container">container</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerDefinition</code> | The container for this extension. |

---

##### `name`<sup>Required</sup> <a name="name" id="@aws-cdk-containers/ecs-service-extensions.XRayExtension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the extension.

---

##### `container`<sup>Optional</sup> <a name="container" id="@aws-cdk-containers/ecs-service-extensions.XRayExtension.property.container"></a>

```typescript
public readonly container: ContainerDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerDefinition

The container for this extension.

Most extensions have a container, but not
every extension is required to have a container. Some extensions may just
modify the properties of the service, or create external resources
connected to the service.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IEnvironment <a name="IEnvironment" id="@aws-cdk-containers/ecs-service-extensions.IEnvironment"></a>

- *Implemented By:* <a href="#@aws-cdk-containers/ecs-service-extensions.Environment">Environment</a>, <a href="#@aws-cdk-containers/ecs-service-extensions.ImportedEnvironment">ImportedEnvironment</a>, <a href="#@aws-cdk-containers/ecs-service-extensions.IEnvironment">IEnvironment</a>

An environment into which to deploy a service.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.IEnvironment.addDefaultCloudMapNamespace">addDefaultCloudMapNamespace</a></code> | Add a default cloudmap namespace to the environment's cluster. |

---

##### `addDefaultCloudMapNamespace` <a name="addDefaultCloudMapNamespace" id="@aws-cdk-containers/ecs-service-extensions.IEnvironment.addDefaultCloudMapNamespace"></a>

```typescript
public addDefaultCloudMapNamespace(options: CloudMapNamespaceOptions): void
```

Add a default cloudmap namespace to the environment's cluster.

###### `options`<sup>Required</sup> <a name="options" id="@aws-cdk-containers/ecs-service-extensions.IEnvironment.addDefaultCloudMapNamespace.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ecs.CloudMapNamespaceOptions

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.IEnvironment.property.capacityType">capacityType</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.EnvironmentCapacityType">EnvironmentCapacityType</a></code> | The capacity type used by the service's cluster. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.IEnvironment.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | The cluster that is providing capacity for this service. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.IEnvironment.property.id">id</a></code> | <code>string</code> | The name of this environment. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.IEnvironment.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC into which environment services should be placed. |

---

##### `capacityType`<sup>Required</sup> <a name="capacityType" id="@aws-cdk-containers/ecs-service-extensions.IEnvironment.property.capacityType"></a>

```typescript
public readonly capacityType: EnvironmentCapacityType;
```

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.EnvironmentCapacityType">EnvironmentCapacityType</a>

The capacity type used by the service's cluster.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@aws-cdk-containers/ecs-service-extensions.IEnvironment.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster

The cluster that is providing capacity for this service.

---

##### `id`<sup>Required</sup> <a name="id" id="@aws-cdk-containers/ecs-service-extensions.IEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The name of this environment.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@aws-cdk-containers/ecs-service-extensions.IEnvironment.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC into which environment services should be placed.

---

### IGrantInjectable <a name="IGrantInjectable" id="@aws-cdk-containers/ecs-service-extensions.IGrantInjectable"></a>

- *Extends:* <a href="#@aws-cdk-containers/ecs-service-extensions.IInjectable">IInjectable</a>

- *Implemented By:* <a href="#@aws-cdk-containers/ecs-service-extensions.InjectableTopic">InjectableTopic</a>, <a href="#@aws-cdk-containers/ecs-service-extensions.IGrantInjectable">IGrantInjectable</a>

An interface that will be implemented by all the injectable resources that need to grant permissions to the task role.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.IGrantInjectable.grant">grant</a></code> | *No description.* |

---

##### `grant` <a name="grant" id="@aws-cdk-containers/ecs-service-extensions.IGrantInjectable.grant"></a>

```typescript
public grant(taskDefinition: TaskDefinition): void
```

###### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@aws-cdk-containers/ecs-service-extensions.IGrantInjectable.grant.parameter.taskDefinition"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinition

---


### IInjectable <a name="IInjectable" id="@aws-cdk-containers/ecs-service-extensions.IInjectable"></a>

- *Implemented By:* <a href="#@aws-cdk-containers/ecs-service-extensions.InjectableTopic">InjectableTopic</a>, <a href="#@aws-cdk-containers/ecs-service-extensions.IGrantInjectable">IGrantInjectable</a>, <a href="#@aws-cdk-containers/ecs-service-extensions.IInjectable">IInjectable</a>

An interface that will be implemented by all the resources that can be published events or written data to.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.IInjectable.environmentVariables">environmentVariables</a></code> | *No description.* |

---

##### `environmentVariables` <a name="environmentVariables" id="@aws-cdk-containers/ecs-service-extensions.IInjectable.environmentVariables"></a>

```typescript
public environmentVariables(): {[ key: string ]: string}
```


### ISubscribable <a name="ISubscribable" id="@aws-cdk-containers/ecs-service-extensions.ISubscribable"></a>

- *Implemented By:* <a href="#@aws-cdk-containers/ecs-service-extensions.TopicSubscription">TopicSubscription</a>, <a href="#@aws-cdk-containers/ecs-service-extensions.ISubscribable">ISubscribable</a>

An interface that will be implemented by all the resources that can be subscribed to.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ISubscribable.subscribe">subscribe</a></code> | All classes implementing this interface must also implement the `subscribe()` method. |

---

##### `subscribe` <a name="subscribe" id="@aws-cdk-containers/ecs-service-extensions.ISubscribable.subscribe"></a>

```typescript
public subscribe(extension: QueueExtension): IQueue
```

All classes implementing this interface must also implement the `subscribe()` method.

###### `extension`<sup>Required</sup> <a name="extension" id="@aws-cdk-containers/ecs-service-extensions.ISubscribable.subscribe.parameter.extension"></a>

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.QueueExtension">QueueExtension</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.ISubscribable.property.subscriptionQueue">subscriptionQueue</a></code> | <code><a href="#@aws-cdk-containers/ecs-service-extensions.SubscriptionQueue">SubscriptionQueue</a></code> | The `SubscriptionQueue` object for the `ISubscribable` object. |

---

##### `subscriptionQueue`<sup>Optional</sup> <a name="subscriptionQueue" id="@aws-cdk-containers/ecs-service-extensions.ISubscribable.property.subscriptionQueue"></a>

```typescript
public readonly subscriptionQueue: SubscriptionQueue;
```

- *Type:* <a href="#@aws-cdk-containers/ecs-service-extensions.SubscriptionQueue">SubscriptionQueue</a>
- *Default:* none

The `SubscriptionQueue` object for the `ISubscribable` object.

---

## Enums <a name="Enums" id="Enums"></a>

### EnvironmentCapacityType <a name="EnvironmentCapacityType" id="@aws-cdk-containers/ecs-service-extensions.EnvironmentCapacityType"></a>

The types of capacity that are supported.

These capacity types may change the
behavior of an extension.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.EnvironmentCapacityType.FARGATE">FARGATE</a></code> | Specify that the environment should use AWS Fargate for hosting containers. |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.EnvironmentCapacityType.EC2">EC2</a></code> | Specify that the environment should launch containers onto EC2 instances. |

---

##### `FARGATE` <a name="FARGATE" id="@aws-cdk-containers/ecs-service-extensions.EnvironmentCapacityType.FARGATE"></a>

Specify that the environment should use AWS Fargate for hosting containers.

---


##### `EC2` <a name="EC2" id="@aws-cdk-containers/ecs-service-extensions.EnvironmentCapacityType.EC2"></a>

Specify that the environment should launch containers onto EC2 instances.

---


### Protocol <a name="Protocol" id="@aws-cdk-containers/ecs-service-extensions.Protocol"></a>

Enum of supported AppMesh protocols.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Protocol.HTTP">HTTP</a></code> | *No description.* |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Protocol.TCP">TCP</a></code> | *No description.* |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Protocol.HTTP2">HTTP2</a></code> | *No description.* |
| <code><a href="#@aws-cdk-containers/ecs-service-extensions.Protocol.GRPC">GRPC</a></code> | *No description.* |

---

##### `HTTP` <a name="HTTP" id="@aws-cdk-containers/ecs-service-extensions.Protocol.HTTP"></a>

---


##### `TCP` <a name="TCP" id="@aws-cdk-containers/ecs-service-extensions.Protocol.TCP"></a>

---


##### `HTTP2` <a name="HTTP2" id="@aws-cdk-containers/ecs-service-extensions.Protocol.HTTP2"></a>

---


##### `GRPC` <a name="GRPC" id="@aws-cdk-containers/ecs-service-extensions.Protocol.GRPC"></a>

---

