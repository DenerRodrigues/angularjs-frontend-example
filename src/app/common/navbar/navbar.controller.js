class NavbarController {
  constructor($state, AuthTokenService) {
    'ngInject';

    this.name = 'navbar';

    this.$state = $state;
    this.AuthTokenService = AuthTokenService;
  }

  logout() {
    this.AuthTokenService.revokeToken();
    this.$state.go('guest.login');
  }
}

export default NavbarController;
