class NavbarController {
  constructor($state, AuthTokenService, envService) {
    'ngInject';

    this.name = 'navbar';

    this.$state = $state;
    this.AuthTokenService = AuthTokenService;
    this.apiUrl = envService.read('apiUrl');
  }

  logout() {
    this.AuthTokenService.revokeToken();
    this.$state.go('guest.login');
  }
}

export default NavbarController;
