class UserService {
  constructor(Restangular) {
    'ngInject';

    this.Restangular = Restangular;
    this.service = this.Restangular.one('me/');
    this.user = {};
  }

  setAddress() {
    if (this.user.address) {
      const addr = this.user.address;
      this.user.cep_address = addr.cep;
      this.user.str_address = `${addr.street} - ${addr.neighborhood} - ${addr.city} - ${addr.state} - ${addr.country}`;
    }
  }

  getMe() {
    return this.service.get().then((response) => {
      this.user = response.result;
      this.setAddress();
      return this.user;
    });
  }

  update(full_name, email, cep_address) {
    const user = {
      full_name,
      email,
      cep_address,
    };
    return this.service.customPUT(user).then((response) => {
      this.user = response.result;
      this.setAddress();
      return this.user;
    });
  }

  changePassword(old_password, new_password) {
    const data = {
      old_password,
      new_password,
    };
    return this.service.one('change_password/').customPUT(data);
  }

  inactiveAccount() {
    return this.service.remove();
  }
}

export default UserService;
