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
    
    return fetch(`${this.url}`, {
      headers: {},
    })
    .then(res => this._checkResponse(res));
  }
}

//  https://new.sharik.ru/api/rest/v1/products_detailed/get_many/?ids=77753,77754,77755,77757,77758,77776,77791,77792,77793,77794,77795,77796,78125,78126,78129,78130,78146,78148,78149,78172  
const api = new Api({
    baseUrl: 'https://cors-anywhere.herokuapp.com/https://new.sharik.ru/api/rest/v1/products_detailed/get_many/?ids=77753,77754,77755,77757,77758,77776,77791,77792,77793,77794,77795,77796,78125,78126,78129,78130,78146,78148,78149,78172',
});

export default api;