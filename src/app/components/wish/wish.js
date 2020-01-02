import angular from 'angular';

import wishComponent from './wish.component';
import WishService from './wish.service';

import wishForm from './form/wish-form';
import wishList from './list/wish-list';

const wishModule = angular.module('wish', [
  wishForm,
  wishList,
])
  .component('wish', wishComponent)
  .service('WishService', WishService)
  .name;

export default wishModule;
