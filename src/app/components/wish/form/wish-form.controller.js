class WishFormController {
  constructor(WishService) {
    'ngInject';

    this.name = 'wish-form';

    this.WishService = WishService;
  }

  $onInit() {
    this.wish = this.wishSelected || {
      name: '',
      price: null,
      description: '',
    };
  }

  saveWish() {
    if (this.wish.id) {
      return this.updateWish();
    }
    return this.createWish();
  }

  createWish() {
    this.WishService.createWish(this.wish.name, this.wish.price, this.wish.description).then(() => {
      this.showForm = false;
    }, (reject) => {
      this.message = {
        type: 'is-danger',
        text: reject.data.result,
      };
    });
  }

  updateWish() {
    this.WishService.updateWish(this.wish.id, this.wish.name, this.wish.price, this.wish.description).then(() => {
      this.showForm = false;
    }, (reject) => {
      this.message = {
        type: 'is-danger',
        text: reject.data.result,
      };
    });
  }

  removeWish() {
    this.WishService.removeWish(this.wish.id).then(() => {
      this.showForm = false;
    }, (reject) => {
      if (reject.data) {
        this.message = {
          type: 'is-danger',
          text: reject.data.result,
        };
      } else {
        this.showForm = false;
      }
    });
  }
}

export default WishFormController;
