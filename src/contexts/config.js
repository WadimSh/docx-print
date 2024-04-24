import small_prices_img from '../assets/images/small-prices.png';
import encode_prices_img from '../assets/images/encode-prices.png';

import small_prices_icon from '../assets/images/small-prices-icon.png';

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
        icon: small_prices_icon,
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
  {
    id: 2,
    name: 'Прочие документы',
    value: 'document',
    options: [
      {
        name: 'Бланк письма',
        value: 'blank-letter',
        description: '',
        imege_preview: encode_prices_img,
        properties: {
          company_name: true,
        }
      },
    ]
  },
];