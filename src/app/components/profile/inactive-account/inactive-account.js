import angular from 'angular';

import inactiveAccountComponent from './inactive-account.component';

const inactiveAccountModule = angular.module('showInactiveAccount', [])
  .component('inactiveAccount', inactiveAccountComponent)
  .name;

export default inactiveAccountModule;
