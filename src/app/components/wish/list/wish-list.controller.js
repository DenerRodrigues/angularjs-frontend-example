class WishListController {
  constructor(WishService) {
    'ngInject';

    this.name = 'wish';

    this.WishService = WishService;
  }

  $onInit() {
    this.WishService.fetch().then((response) => {
      this.wishes = response;
    });
  }
}

export default WishListController;
