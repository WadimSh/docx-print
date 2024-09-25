const api = (() => {
  const _checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  };

  const get = (type, ids) => {
    return fetch(`https://${type}.sharik.ru/api/rest/v1/products_detailed/get_many/?ids=${ids}`)
      .then(_checkResponse);
  };

  return { get };
})();

export default api;