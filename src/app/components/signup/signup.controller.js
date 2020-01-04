class SignupController {
  constructor(SignUpService) {
    'ngInject';

    this.name = 'login';

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
      if (reject.data) {
        this.message = {
          type: 'is-danger',
          text: JSON.parse(reject.data).result,
        };
      } else {
        this.message = {
          type: 'is-danger',
          text: reject,
        };
      }
    });
  }
}

export default SignupController;
