import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import signUpComponent from './signup.component';
import SignUpService from './signup.service';

const signUpModule = angular.module('guest.signup', [
  uiRouter,
])
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('guest.signup', {
        url: '/signup',
        views: {
          'content@guest': {
            component: 'signup',
          },
        },
      });
  })
  .component('signup', signUpComponent)
  .service('SignUpService', SignUpService)
  .name;

export default signUpModule;
