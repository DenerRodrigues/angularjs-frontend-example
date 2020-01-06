import angular from 'angular';
import restangular from 'restangular';
import Environment from './../environment';

export default angular.module('module.api', [
  restangular,
  Environment,
])
  .config((RestangularProvider, envServiceProvider) => {
    'ngInject';

    // eslint-disable-next-line no-undef
    const authorization = `Basic ${localStorage.getItem('app_token')}`;
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
    });
  })
  .name;
