import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import guestComponent from './guest.component';

const guestModule = angular.module('guest', [
  uiRouter,
])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('guest', {
        abstract: true,
        component: 'guest',
      });
  })
  .component('guest', guestComponent)

  .name;

export default guestModule;
