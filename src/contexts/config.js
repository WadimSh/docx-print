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
        description: 'Эти ценники имеют размер 4x5 см и содержат информацию о товаре. На них указано название компании (до 25 символов), артикул товара, его название, а также торговая марка производителя или страна происхождения в нижней части. Если товар продается поштучно, то указана цена за одну штуку. Если продается в большом количестве, то помимо цены за штуку также указана цена за единицу и количество в этой единице. Ниже приведен пример ценника с указанной информацией.',
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
      {
        name: 'Ценники со штрих-кодом и картинкой',
        value: 'barcode-prices',
        description: '',
        imege_preview: encode_prices_img,
        properties: {
          fair_rounding: true,
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