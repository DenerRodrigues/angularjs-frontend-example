import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import profileComponent from './profile.component';

const profileModule = angular.module('profile', [
  uiRouter,
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
