class WishListController {
  constructor(WishService) {
    'ngInject';

    this.name = 'wish-list';

    this.WishService = WishService;
    this.search = '';
  }

  $onInit() {
    this.showForm = false;
    this.wishSelected = null;
    this.WishService.fetch().then((response) => {
      this.wishes = response;
    });
  }

  onSelect(wish) {
    this.wishSelected = wish;
    this.showForm = true;
  }
}

export default WishListController;
