const { awscdk } = require('projen');

const deps = [
  'aws-cdk-lib@2.19.0',
  'constructs@^10.0.0',
];

const project = new awscdk.AwsCdkConstructLibrary({
  packageName: 'cdk-ecs-service-extensions',
  author: 'Amazon Web Services',
  authorAddress: 'https://aws.amazon.com',
  authorOrganization: true,
  cdkVersionPinning: '2.19.0',
  cdkVersion: '2.19.0',
  defaultReleaseBranch: 'main',
  name: 'cdklabs/cdk-ecs-service-extensions',
  repositoryUrl: 'https://github.com/cdklabs/cdk-ecs-service-extensions.git',
  stability: 'experimental',

  deps,
  peerDeps: deps,
  devDeps: [
    '@types/jest',
    'aws-cdk-lib@2.19.0',
    'jest',
  ],

  publishToPypi: {
    distName: 'cdk-ecs-service-extensions',
    module: 'cdk_ecs_service_extensions',
  },

  publishToNuget: {
    packageId: 'Cdklabs.CdkEcsServiceExtensions',
    dotNetNamespace: 'Cdklabs.CdkEcsServiceExtensions',
  },

  publishToMaven: {
    mavenGroupId: 'io.github.cdklabs',
    javaPackage: 'io.github.cdklabs.cdkecsserviceextensions',
    mavenArtifactId: 'cdk-ecs-service-extensions',
    mavenEndpoint: 'https://s01.oss.sonatype.org',
  },

  autoApproveOptions: {
    allowedUsernames: ['cdklabs-automation'],
    secret: 'GITHUB_TOKEN',
  },

  autoApproveUpgrades: true,
});

project.synth();