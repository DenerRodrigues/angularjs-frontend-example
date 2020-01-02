import angular from 'angular';

import wishFormComponent from './wish-form.component';
import WishService from './../wish.service';

const wishModule = angular.module('wish-form', [])
  .component('wishForm', wishFormComponent)
  .service('WishService', WishService)
  .name;

export default wishModule;
