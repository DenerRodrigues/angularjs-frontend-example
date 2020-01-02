import angular from 'angular';

import wishListComponent from './wish-list.component';
import WishService from './../wish.service';

const wishModule = angular.module('wish-list', [])
  .component('wishList', wishListComponent)
  .service('WishService', WishService)
  .name;

export default wishModule;
