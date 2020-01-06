export default function SignUpService(Restangular) {
  'ngInject';

  function signUp(full_name, email, password, cep_address) {
    const user = {
      full_name,
      email,
      password,
      cep_address,
    };
    return Restangular.one('signup/').customPOST(user).then((response) => {
      this.user = response.result;
      return this.user;
    });
  }

  return {
    signUp,
  };
}
