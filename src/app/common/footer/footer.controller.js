class FooterController {
  constructor() {
    'ngInject';

    this.name = 'footer';
    this.year = new Date().getFullYear();
  }
}

export default FooterController;
