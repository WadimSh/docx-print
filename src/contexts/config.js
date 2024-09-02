import small_prices_img from '../assets/images/small-prices.png';
import barcode_img_prices_img from '../assets/images/barcode-img-prices.png';
import image_prices_img from '../assets/images/image-prices.png';
import barcode_prices_img from '../assets/images/barcode-prices.png';
import small_barcode_prices_img from '../assets/images/small-barcode-prices.png';

export const config = [
  {
    id: 1,
    name: 'Ценники для магазина',
    value: 'prices',
    options: [
      {
        name: 'Маленькие ценники 4х5см',
        value: 'small-prices',
        description: 'Эти ценники имеют размер 4x5 см и содержат информацию о товаре. На них указано название компании (до 25 символов), артикул товара, его название, а также торговая марка производителя или страна происхождения в нижней части. Если товар продается поштучно, то указана цена за одну штуку. Если продается в большом количестве, то помимо цены за штуку также указана цена за минимальную партию поставки. Ниже приведен пример создаваемого документа с указанными ценниками.',
        imege_preview: small_prices_img,
        properties: {
          fair_rounding: false,
          company_name: true,
          extra_charge: true,
          round_price: true,
        }
      },
      {
        name: 'Маленькие ценники 4х5см со штрих-кодом',
        value: 'small-barcode-prices',
        description: 'Эти ценники имеют размер 4x5 см и содержат информацию о товаре, включая название компании (до 25 символов), артикул, название и бренд/страну изготовителя. Если товар продается поштучно, указана цена за одну штуку. Если продается оптом, указана цена за единицу и за минимальную партию. Также указан штрих-код минимальной единицы продажи. Ниже приведен пример документа с такими ценниками.',
        imege_preview: small_barcode_prices_img,
        properties: {
          fair_rounding: true,
          company_name: true,
          extra_charge: true,
          round_price: true,
        }
      },
      {
        name: 'Ценники со штрих-кодом 4x6 cм',
        value: 'barcode-prices',
        description: 'Эти ценники имеют размер 4x6 см и содержат информацию о товаре, включая название компании (до 25 символов), артикул, название и бренд/страну изготовителя. Если товар продается поштучно, указана цена за одну штуку. Если продается оптом, указана цена за единицу и за минимальную партию. Также указан штрих-код минимальной единицы продажи. Ниже приведен пример документа с такими ценниками.',
        imege_preview: barcode_prices_img,
        properties: {
          fair_rounding: true,
          company_name: true,
          extra_charge: true,
          round_price: true,
        }
      },
      {
        name: 'Ценники с картинкой 4x10cм',
        value: 'image-prices',
        description: 'Эти ценники имеют размер 4x10 см с информацией о товаре. На них есть название компании (до 25 символов), изображение товара, а также артикул, название и бренд/страна изготовителя. Если товар продаётся поштучно, указана цена за одну штуку. Если продаётся в большом количестве, указана цена за единицу и за минимальную партию поставки. Ниже приведен пример создаваемого документа с указанными ценниками.',
        imege_preview: image_prices_img,
        properties: {
          fair_rounding: false,
          company_name: true,
          extra_charge: true,
          round_price: true,
        }
      },
      {
        name: 'Ценники 4x10cм со штрих-кодом и картинкой',
        value: 'barcode-img-prices',
        description: 'Эти ценники имеют размер 4x10 см и содержат информацию о товаре, включая название компании (до 25 символов), изображение товара, артикул, название и бренд/страну изготовителя. Если товар продается поштучно, указана цена за одну штуку. Если продается оптом, указана цена за единицу и за минимальную партию. Также указан штрих-код минимальной единицы продажи. Ниже приведен пример документа с такими ценниками.',
        imege_preview: barcode_img_prices_img,
        properties: {
          fair_rounding: true,
          company_name: true,
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