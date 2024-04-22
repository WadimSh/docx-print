class Api {

  constructor({ baseUrl }) {
    this.url = baseUrl;
  }

  _checkResponse = (res) => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  get(ids) {
    return fetch(`${this.url}${ids}`)
    .then(res => this._checkResponse(res));
  }
};

const api = new Api({
    baseUrl: 'https://cash.sharik.ru/api/rest/v1/products_detailed/get_many/?ids=',
});

export default api;