import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import sideBarComponent from './sidebar.component';

const SideBarModule = angular.module('common.sidebar', [
  uiRouter,
])
  .component('sidebar', sideBarComponent)
  .name;

export default SideBarModule;
