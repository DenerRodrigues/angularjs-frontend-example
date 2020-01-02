import angular from 'angular';
import AuthTokenService from './auth-token.service';

const authTokenModule = angular.module('common.auth-token', [])
  .service('AuthTokenService', AuthTokenService)
  .name;

export default authTokenModule;
