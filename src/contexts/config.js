import small_prices_img from '../assets/images/small-prices.png';
import encode_prices_img from '../assets/images/encode-prices.png';

export const config = [
  {
    id: 1,
    name: 'Ценники для магазина',
    value: 'prices',
    options: [
      {
        name: 'Маленькие ценники 4х5см',
        value: 'small-prices',
        description: '',
        imege_preview: small_prices_img,
        properties: {
          company_name: true,
          extra_charge: true,
          round_price: true,
        }
      },
      {
        name: 'Ценники с картинкой',
        value: 'image-prices',
        description: '',
        imege_preview: encode_prices_img,
        properties: {
          fair_rounding: true,
          extra_charge: true,
          round_price: true,
        }
      },
    ]
  },
];