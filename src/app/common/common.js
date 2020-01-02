import angular from 'angular';

import Api from './api/api';
import AuthToken from './auth-token/auth-token';
import Env from './environment';

import Navbar from './navbar/navbar';
import MenuSide from './sidebar/sidebar';
import Footer from './footer/footer';

const commonModule = angular.module('app.common', [
  Api,
  AuthToken,
  Env,

  Navbar,
  MenuSide,
  Footer,
])
  .name;

export default commonModule;
