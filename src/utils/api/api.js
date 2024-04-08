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
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => this._checkResponse(res));
  }
}

const api = new Api({
    baseUrl: 'https://new.sharik.ru/api/rest/v1/products_detailed/get_many/?ids=77753,77754,77755,77757,77758,77776,77791,77792,77793,77794,77795,77796,78125,78126,78129,78130,78146,78148,78149,78172',
});

// Это для получения параметров запроса из url -  http://localhost:3000/?param1=value1&param2=value2
//const URLParams = () => {
//  const urlParams = new URLSearchParams(window.location.search);
//  const param1 = urlParams.get('param1');
//  const param2 = urlParams.get('param2');
//}
// или так если перечислены через + -  http://localhost:3000/?param1=value1+value2+value3
//useEffect(() => {
//  const searchParams = new URLSearchParams(window.location.search);
//  const params = {};
//  for (let [key, value] of searchParams) {
//      params[key] = value.split('+');
//  }
//  console.log(params);
//}, []);

export default api;