class InactiveAccountController {
  constructor($state, UserService) {
    'ngInject';

    this.name = 'inactive-account';

    this.$state = $state;
    this.UserService = UserService;
  }

  inactiveAccount() {
    this.UserService.inactiveAccount().then(() => {
      this.$state.go('guest.login');
    }, (reject) => {
      this.message = {
        type: 'is-danger',
        text: reject.data,
      };
    });
  }
}

export default InactiveAccountController;
