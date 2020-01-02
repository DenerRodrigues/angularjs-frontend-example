import angular from 'angular';
import restangular from 'restangular';

function localStorageToken() {
  // eslint-disable-next-line no-undef
  return localStorage.getItem('app_token');
}

export default angular.module('module.api', [
  restangular,
])
  .config((RestangularProvider) => {
    'ngInject';

    const authorization = `Basic ${localStorageToken()}`;
    RestangularProvider.setDefaultHeaders({ Authorization: authorization });
    RestangularProvider.setBaseUrl('http://127.0.0.1:5000');
    RestangularProvider.setRequestInterceptor((elem, operation) => {
      if (operation === 'remove') {
        return undefined;
      }
      return elem;
    });
  })
  .run((Restangular, $state, $q, $http) => {
    'ngInject';

    let defer = null;

    Restangular.setErrorInterceptor((responseRejected, deferred, responseHandler) => {
      if (responseRejected.status === 401 && $state.current.name !== 'guest.login') {
        defer = $q.defer();
        // eslint-disable-next-line no-undef
        const token = localStorageToken();
        if (token) {
          defer.resolve(token);
        } else {
          defer.reject();
        }
        defer.promise.then((accessToken) => {
          const newRetry = { ...responseRejected };
          newRetry.config.headers.Authorization = `Basic ${accessToken}`;
          const retry = $http(newRetry.config);
          retry.then(() => {
            defer = null;
          });
          retry.then(responseHandler, deferred.reject);
        }, () => {
          $state.go('guest.login');
        });
        defer.promise.then(() => {
        }, deferred.reject);
        return false;
      }
      return true;
    });
  })
  .name;
