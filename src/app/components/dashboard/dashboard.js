import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import dashboardComponent from './dashboard.component';

const dashboardModule = angular.module('dashboard', [
  uiRouter,
])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('authenticated.dashboard', {
        url: '/',
        views: {
          'content@authenticated': {
            component: 'dashboard',
          },
        },
      });
  })
  .component('dashboard', dashboardComponent)
  .name;

export default dashboardModule;
