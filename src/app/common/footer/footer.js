import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import footerComponent from './footer.component';
import './footer.scss';

const footerModule = angular.module('common.footer', [
  uiRouter,
])
  .component('ffooter', footerComponent)
  .name;

export default footerModule;
