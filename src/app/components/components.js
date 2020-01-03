import angular from 'angular';

import Guest from './guest/guest';
import SignUp from './signup/signup';
import Login from './login/login';

import Authenticated from './authenticated/authenticated';
import Profile from './profile/profile';
import Dashboard from './dashboard/dashboard';
import Wish from './wish/wish';

const viewsModule = angular.module('app.components', [
  Guest,
  SignUp,
  Login,

  Authenticated,
  Profile,
  Dashboard,
  Wish,
])
  .name;

export default viewsModule;
