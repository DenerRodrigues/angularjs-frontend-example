import angular from 'angular';
import UserService from './user.service';

const userModule = angular.module('module.user', [])
  .service('UserService', UserService)
  .name;

export default userModule;
