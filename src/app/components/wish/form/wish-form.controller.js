class WishFormController {
  constructor(WishService) {
    'ngInject';

    this.name = 'wish';

    this.WishService = WishService;

    this.wish = {
      name: '',
      price: null,
      description: '',
    };
  }

  createWish() {
    this.WishService.createWish(this.wish.name, this.wish.price, this.wish.description).then(() => {
      this.showForm = false;
    }, (reject) => {
      this.message = {
        type: 'is-danger',
        text: JSON.parse(reject.data).result,
      };
    });
  }
}

export default WishFormController;
