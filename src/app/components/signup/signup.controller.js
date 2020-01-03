class SignupController {
  constructor($state, SignUpService) {
    'ngInject';

    this.name = 'login';

    this.$state = $state;
    this.SignUpService = SignUpService;
    this.user = {
      name: '',
      email: '',
      password: '',
      cep_address: '',
    };
  }

  signup() {
    this.SignUpService.signUp(this.user.full_name, this.user.email, this.user.password, this.user.cep_address).then(() => {
      this.message = {
        type: 'is-success',
        text: 'User successfully registered',
      };
    }, (reject) => {
      this.message = {
        type: 'is-danger',
        text: JSON.parse(reject.data).result,
      };
    });
  }
}

export default SignupController;
