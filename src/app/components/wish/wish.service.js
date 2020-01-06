export default function WishService(Restangular) {
  'ngInject';

  const service = Restangular.one('wish/');

  function fetch(name = '') {
    const params = { name };
    return service.get(params).then(response => response.result);
  }

  function createWish(name, price, description = '') {
    const wish = {
      name,
      price,
      description,
    };
    return service.customPOST(wish).then(response => response);
  }

  function updateWish(id, name, price, description = '') {
    const wish = {
      name,
      price,
      description,
    };
    return service.one(`${id}/`).customPUT(wish).then(response => response);
  }

  function removeWish(id) {
    return service.one(`${id}/`).remove().then(response => response);
  }

  return {
    fetch,
    createWish,
    updateWish,
    removeWish,
  };
}
