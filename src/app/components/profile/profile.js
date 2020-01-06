import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import profileComponent from './profile.component';

import changePassword from './change-password/change-password';
import inactiveAccount from './inactive-account/inactive-account';

const profileModule = angular.module('profile', [
  uiRouter,

  changePassword,
  inactiveAccount,
])
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('authenticated.profile', {
        url: '/profile',
        views: {
          'content@authenticated': {
            component: 'profile',
          },
        },
      });
  })
  .component('profile', profileComponent)
  .name;

export default profileModule;
