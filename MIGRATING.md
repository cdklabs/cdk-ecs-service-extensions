# Migrating to @aws-cdk-containers/ecs-service-extensions v2

The v2 version of this module comes with two main changes. It is now
compatible with CDK v2, and it is now JSII-compliant (can be vended
to other JSII target languages). It is recommended that you migrate
your own application from `@aws-cdk-containers/ecs-service-extensions`
to continue to receive features and bug fixes.

There are no big API changes between v1 and v2. However, there may be
some small modifications necessary to get your application ready for
`@aws-cdk-containers/ecs-service-extensions` v2.

## Type Changes

- `Environment.cluster` changes from type `ecs.Cluster` to `ecs.ICluster`.
- `InjecterExtensionProps.injectables` changes from type `Injectable[]` to `IInjectable[]`.
- `MeshProps.protocol` changes from type `appmesh.Protocol` to `Protocol`.

## Name Changes

| v1 API                              | v2 API
|-------------------------------------|------------------------------------------------|
| `ConnectToProps.local_bind_port`    | `ConnectToProps.localBindPort`                 |
| `Injectable`                        | `IInjectable`                                  |
| `GrantInjectable`                   | `IGrantInjectable`                             |
