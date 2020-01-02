import angular from 'angular';

import Guest from './guest/guest';
import Login from './login/login';

import Authenticated from './authenticated/authenticated';
import Dashboard from './dashboard/dashboard';
import Wish from './wish/wish';

const viewsModule = angular.module('app.components', [
  Guest,
  Login,

  Authenticated,
  Dashboard,
  Wish,
])
  .name;

export default viewsModule;
