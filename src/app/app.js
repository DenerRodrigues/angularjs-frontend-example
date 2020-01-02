import angular from 'angular';

import ngBlockUI from 'angular-block-ui';
import ngUiRouter from '@uirouter/angularjs';
import ngSanitize from 'angular-sanitize'; // eslint-disable-line no-unused-vars

import 'angular-translate';
import 'angular-translate-storage-cookie';
import 'angular-translate-storage-local';

import ngRedux from 'ng-redux';
import ngReduxRouter from 'redux-ui-router';
import rdxFsaLinter from 'redux-fsa-linter';
import { createLogger } from 'redux-logger';
import rdxThunk from 'redux-thunk';

import Common from './common/common';
import Components from './components/components';

import AppComponent from './app.component';

angular.module('app', [
  ngBlockUI,
  ngUiRouter,
  ngSanitize,

  ngRedux,
  ngReduxRouter,
  rdxFsaLinter,

  Common,
  Components,
]).config(($locationProvider) => {
  'ngInject';

  $locationProvider.html5Mode({ enabled: true, requireBase: false }).hashPrefix('!');
}).config(($ngReduxProvider) => {
  'ngInject';

  const middlewares = [];
  const enhancers = [];
  const reducers = {};

  middlewares.push(rdxThunk);
  middlewares.push(rdxFsaLinter());
  middlewares.push(createLogger({collapsed: true}));

  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  $ngReduxProvider.createStoreWith(reducers, middlewares, enhancers);
}).config((blockUIConfig) => {
  'ngInject';

  blockUIConfig.autoBlock = false;
})
  .component('app', AppComponent);
