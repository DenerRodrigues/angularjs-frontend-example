class LoginController {
  constructor($state, LoginService, AuthTokenService) {
    'ngInject';

    this.name = 'login';

    this.$state = $state;
    this.LoginService = LoginService;
    this.AuthTokenService = AuthTokenService;
  }

  $onInit() {
    this.AuthTokenService.revokeToken();
  }

  login() {
    this.LoginService.signIn(this.email, this.password).then(() => {
      this.$state.go('authenticated.dashboard');
    }, () => {
      this.message = {
        type: 'is-danger',
        text: 'E-mail or Password Error',
      };
    });
  }
}

export default LoginController;
