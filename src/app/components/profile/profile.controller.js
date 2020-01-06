class ProfileController {
  constructor(UserService) {
    'ngInject';

    this.name = 'profile';

    this.UserService = UserService;
    this.showChangePasswordForm = false;
  }

  $onInit() {
    this.UserService.getMe().then(() => {
      this.user = this.UserService.user;
    });
  }

  saveProfile() {
    this.UserService.update(this.user.full_name, this.user.email, this.user.cep_address).then(() => {
      this.user = this.UserService.user;
      this.message = {
        type: 'is-success',
        text: 'Updated Profile',
      };
    }, (reject) => {
      this.message = {
        type: 'is-danger',
        text: reject.data.result,
      };
    });
  }
}

export default ProfileController;
