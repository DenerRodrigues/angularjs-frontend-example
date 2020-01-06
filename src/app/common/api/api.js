import angular from 'angular';
import restangular from 'restangular';
import Environment from './../environment';

function localStorageToken() {
  // eslint-disable-next-line no-undef
  return localStorage.getItem('app_token');
}

export default angular.module('module.api', [
  restangular,
  Environment,
])
  .config((RestangularProvider, envServiceProvider) => {
    'ngInject';

    const authorization = `Bearer ${localStorageToken()}`;
    RestangularProvider.setDefaultHeaders({ Authorization: authorization });
    RestangularProvider.setBaseUrl(envServiceProvider.read('apiUrl'));
    RestangularProvider.setRequestInterceptor((elem, operation) => {
      if (operation === 'remove') {
        return undefined;
      }
      return elem;
    });
  })
  .run((Restangular, $state) => {
    'ngInject';

    Restangular.setErrorInterceptor((responseRejected) => {
      if ((responseRejected.status === -1 || responseRejected.status === 401) &&
        ($state.current.name !== 'guest.login' && $state.current.name !== 'guest.signup')) {
        $state.go('guest.login');
      }
      return false;
    });
  })
  .name;
