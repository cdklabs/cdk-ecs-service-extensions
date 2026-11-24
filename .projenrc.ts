import { CdklabsConstructLibrary } from 'cdklabs-projen-project-types';
import { javascript } from 'projen';

const project = new CdklabsConstructLibrary({
  packageName: '@aws-cdk-containers/ecs-service-extensions',
  author: 'Amazon Web Services',
  authorAddress: 'https://aws.amazon.com',
  authorOrganization: true,
  cdkVersion: '2.52.0',
  // projen >= 0.100 defaults constructs to ^10.5.1. constructs 10.5 adds `with()`,
  // which aws-cdk-go < 2.239.0 does not resolve, so the Go package stops compiling.
  // Keep constructs in line with cdkVersion until cdkVersion is raised to >= 2.239.0.
  constructsVersion: '10.0.5',
  defaultReleaseBranch: 'main',
  description: 'The CDK Construct Library that helps you build ECS services using simple extensions',
  name: 'cdklabs/cdk-ecs-service-extensions',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/cdklabs/cdk-ecs-service-extensions.git',
  stability: 'experimental',
  majorVersion: 2,
  prerelease: 'alpha',
  private: false,

  peerDeps: [
    'aws-cdk-lib',
    'constructs',
  ],
  devDeps: [
    '@types/jest',
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
    mavenServerId: 'central-ossrh',
  },

  publishToGo: {
    moduleName: 'github.com/cdklabs/cdk-ecs-service-extensions-go',
  },

  autoApproveOptions: {
    allowedUsernames: ['cdklabs-automation'],
    secret: 'GITHUB_TOKEN',
  },

  autoApproveUpgrades: true,
  setNodeEngineVersion: false,
  npmAccess: javascript.NpmAccess.RESTRICTED,

  rosettaOptions: {
    strict: false,
  },
});

project.synth();
