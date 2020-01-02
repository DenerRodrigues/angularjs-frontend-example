import angular from 'angular';
import ngenvironment from 'angular-environment';
import env from './env';

export default angular.module('module.environment', [
  ngenvironment,
])
  .config((envServiceProvider) => {
    'ngInject';

    envServiceProvider.config(env);
    envServiceProvider.check();
  })
  .name;
