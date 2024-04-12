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

  get() {
    return fetch(`${this.url}`)
    .then(res => this._checkResponse(res));
  }
};

const api = new Api({
  baseUrl: 'https://new.sharik.ru/api/rest/v1/products_detailed/get_many/?ids=77375,77380,77381,77382,77383,77385,77386,77416,77434,77435,77436,77438,77439,77443,77444,77445,77447,77448,77449,77450',
});

export default api;