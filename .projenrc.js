const { awscdk } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  packageName: '@aws-cdk-containers/ecs-service-extensions',
  author: 'Amazon Web Services',
  authorAddress: 'https://aws.amazon.com',
  authorOrganization: true,
  cdkVersion: '2.8.0',
  defaultReleaseBranch: 'main',
  description: 'The CDK Construct Library that helps you build ECS services using simple extensions',
  name: 'cdklabs/cdk-ecs-service-extensions',
  repositoryUrl: 'https://github.com/cdklabs/cdk-ecs-service-extensions.git',
  stability: 'experimental',
  majorVersion: 2,
  prerelease: 'alpha',

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
    mavenEndpoint: 'https://s01.oss.sonatype.org',
  },

  autoApproveOptions: {
    allowedUsernames: ['cdklabs-automation'],
    secret: 'GITHUB_TOKEN',
  },
  // releaseWorkflowSetupSteps: [{
  //   name: 'Set up Docker Buildx',
  //   id: 'buildx',
  //   uses: 'docker/setup-buildx-action@v1',
  //   with: {
  //     install: true,
  //   },
  // }],

  autoApproveUpgrades: true,
});

project.synth();
