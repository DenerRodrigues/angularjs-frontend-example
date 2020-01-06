class AuthTokenService {
  constructor(Restangular) {
    'ngInject';

    this.Restangular = Restangular;
  }

  authToken(username, password) {
    const token = Buffer.from(`${username}:${password}`).toString('base64');
    this.Restangular.setDefaultHeaders({ Authorization: `Basic ${token}` });
    return this.Restangular.one('token/').customPOST().then((response) => {
      if (response.success) {
        this.Restangular.setDefaultHeaders({ Authorization: `Bearer ${response.result.token}` });
        // eslint-disable-next-line no-undef
        localStorage.setItem('app_token', response.result.token);
      }
    });
  }

  revokeToken() {
    // eslint-disable-next-line no-undef
    localStorage.removeItem('app_token');
  }
}

export default AuthTokenService;
