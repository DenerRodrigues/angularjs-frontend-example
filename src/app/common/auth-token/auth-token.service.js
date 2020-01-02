export default function AuthTokenService(Restangular) {
  'ngInject';

  function authorization(token) {
    return `Basic ${token}`;
  }

  function authToken(username, password) {
    const token = Buffer.from(`${username}:${password}`).toString('base64');
    // eslint-disable-next-line no-undef
    localStorage.setItem('app_token', token);
    // Restangular.setDefaultHeaders({ Authorization: authorization(token) });
    return Restangular.one('token/').customPOST();
  }

  function localStorageToken() {
    // eslint-disable-next-line no-undef
    return localStorage.getItem('app_token');
  }
  function revokeToken() {
    // eslint-disable-next-line no-undef
    localStorage.removeItem('app_token');
  }

  return {
    authToken,
    authorization,
    localStorageToken,
    revokeToken,
  };
}
