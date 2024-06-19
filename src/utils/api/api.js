class Api {

  _checkResponse = (res) => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  get(type, ids) {
    return fetch(`https://${type}.sharik.ru/api/rest/v1/products_detailed/get_many/?ids=${ids}`)
    .then(res => this._checkResponse(res));
  }
};

const api = new Api();

export default api;