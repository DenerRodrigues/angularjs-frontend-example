import angular from 'angular';

import ngUiRouter from '@uirouter/angularjs';
import ngSanitize from 'angular-sanitize';

import 'angular-translate';
import 'angular-translate-storage-cookie';
import 'angular-translate-storage-local';
import 'angular-input-masks';

import Common from './common/common';
import Components from './components/components';

import AppComponent from './app.component';

angular.module('app', [
  ngUiRouter,
  ngSanitize,

  Common,
  Components,

  'ui.utils.masks',
]).config(($locationProvider) => {
  'ngInject';

  $locationProvider.html5Mode({ enabled: true, requireBase: false }).hashPrefix('!');
}).component('app', AppComponent);
