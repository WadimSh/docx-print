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
        description: 'Стандартные ценники имеют размер 4x5 см. В них указано название компании (не более 25 символов), артикул товара, его наименование и, в нижней части, торговая марка производителя или страна происхождения. Если товар продаётся поштучно, то указывается цена за одну штуку. Если же товар продаётся в большом количестве, то, помимо цены за штуку, также отображаются цена за единицу и количество в этой единице.',
        imege_preview: small_prices_img,
        icon: small_prices_icon,
        properties: {
          fair_rounding: false,
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
          fair_rounding: false,
          company_name: false,
          extra_charge: true,
          round_price: true,
        }
      },
    ]
  },
  {
    id: 2,
    name: 'Рекламная листовка',
    value: 'promo-flyers',
    options: [
      
    ]
  },
  {
    id: 3,
    name: 'Коммерческое предложение',
    value: 'business-offer',
    options: [
      
    ]
  },
];