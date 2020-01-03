import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import loginComponent from './login.component';
import LoginService from './login.service';

const loginModule = angular.module('guest.login', [
  uiRouter,
])
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('guest.login', {
        url: '/login',
        views: {
          'content@guest': {
            component: 'login',
          },
        },
      });
  })
  .component('login', loginComponent)
  .service('LoginService', LoginService)
  .name;

export default loginModule;
