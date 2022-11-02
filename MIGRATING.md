# Migrating to @aws-cdk-containers/ecs-service-extensions v2

The v2 version of this module comes with two main changes. It is now
compatible with CDK v2, and has multi-language support. It is recommended
that you migrate your own application or construct library to v2 of
`@aws-cdk-containers/ecs-service-extensions` to continue to receive
features and bug fixes.

There are no big API changes between v1 and v2. However, there may be
some small modifications necessary to get your application ready for
`@aws-cdk-containers/ecs-service-extensions` v2.

## Step 1: Migrate your CDK application or library to AWS CDK v2

See the steps [here](https://docs.aws.amazon.com/cdk/v2/guide/migrating-v2.html).

## Step 2: Update dependencies in your package.json

```json
{
  "dependencies": {
    "@aws-cdk-containers/ecs-service-extensions": "^2.0.0",
  }
}
```

## Step 3: Type Changes

If you use any of the following properties, change them to use their v2 types.

- `Environment.cluster` changes from type `ecs.Cluster` to `ecs.ICluster`.
- `InjecterExtensionProps.injectables` changes from type `Injectable[]` to `IInjectable[]`.
- `MeshProps.protocol` changes from type `appmesh.Protocol` to `Protocol`.

## Step 4: Name Changes

If you use any of the following APIs, change them to use their v2 names.

| v1 API                              | v2 API
|-------------------------------------|------------------------------------------------|
| `ConnectToProps.local_bind_port`    | `ConnectToProps.localBindPort`                 |
| `Injectable`                        | `IInjectable`                                  |
| `GrantInjectable`                   | `IGrantInjectable`                             |
