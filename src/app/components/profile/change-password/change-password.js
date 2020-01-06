import angular from 'angular';

import changePasswordComponent from './change-password.component';

const changePasswordModule = angular.module('changePassword', [])
  .component('changePassword', changePasswordComponent)
  .name;

export default changePasswordModule;
