const { awscdk } = require('projen');

const deps = [
  'aws-cdk-lib',
  'constructs',
];

const project = new awscdk.AwsCdkConstructLibrary({
  packageName: '@aws-cdk-containers/ecs-service-extensions',
  author: 'Amazon Web Services',
  authorAddress: 'https://aws.amazon.com',
  authorOrganization: true,
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'cdklabs/cdk-ecs-service-extensions',
  repositoryUrl: 'https://github.com/cdklabs/cdk-ecs-service-extensions.git',
  stability: 'experimental',
  majorVersion: 2,
  prerelease: 'alpha',

  deps,
  peerDeps: deps,
  devDeps: [
    '@types/jest',
    'aws-cdk-lib',
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