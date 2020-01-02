export default function WishService(Restangular) {
  'ngInject';

  const service = Restangular.one('wish/');

  function fetch() {
    return service.get().then(response => JSON.parse(response).result);
  }

  function createWish(name, price, description = '') {
    const wish = {
      name,
      price,
      description,
    };
    return service.customPOST(wish).then(response => JSON.parse(response));
  }

  return {
    fetch, createWish,
  };
}
