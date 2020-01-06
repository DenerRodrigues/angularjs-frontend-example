class ChangePasswordController {
  constructor(UserService) {
    'ngInject';

    this.name = 'change-password';

    this.UserService = UserService;
    this.initForm();
  }

  initForm() {
    this.user = {
      old_password: '',
      new_password: '',
    };
  }

  changePassword() {
    this.UserService.changePassword(this.user.old_password, this.user.new_password).then(() => {
      this.message = {
        type: 'is-success',
        text: 'Updated Password',
      };
    }, (reject) => {
      this.message = {
        type: 'is-danger',
        text: reject.data,
      };
    });
    this.initForm();
  }
}

export default ChangePasswordController;
