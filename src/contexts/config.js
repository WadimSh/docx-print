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
        name: 'Ценники для крючка 40х50 мм',
        value: 'small-prices',
        grid: {
          table: 28,
          columns: 4,
        },
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
        name: 'Ценники для крючка 40х50 мм со штрих-кодом',
        value: 'small-barcode-prices',
        grid: {
          table: 28,
          columns: 4,
        },
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
        name: 'Ценники для полки 40x60 мм со штрих-кодом',
        value: 'barcode-prices',
        grid: {
          table: 21,
          columns: 3,
        },
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
        name: 'Ценники для полки 40x100 мм с картинкой',
        value: 'image-prices',
        grid: {
          table: 14,
          columns: 2,
        },
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
        name: 'Ценники для полки 40x100 мм со штрих-кодом и картинкой',
        value: 'image-barcode-prices',
        grid: {
          table: 14,
          columns: 2,
        },
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
    value: 'flyers',
    options: [
      {
        name: 'Обычная рекламная листовка',
        value: 'flyers1',
        grid: {
          table: 1,
          columns: 1,
        },
        description: 'Это простая рекламная листовка.',
        imege_preview: image_prices_img,
        properties: {
          fair_rounding: false,
          company_name: false,
          extra_charge: false,
          round_price: false,
        }
      },
      {
        name: 'Обычная рекламная листовка',
        value: 'flyers2',
        grid: {
          table: 4,
          columns: 2,
        },
        description: 'Это простая рекламная листовка.',
        imege_preview: image_prices_img,
        properties: {
          fair_rounding: false,
          company_name: false,
          extra_charge: false,
          round_price: false,
        }
      }, 
      {
        name: 'Обычная рекламная листовка',
        value: 'flyers3',
        grid: {
          table: 9,
          columns: 3,
        },
        description: 'Это простая рекламная листовка.',
        imege_preview: image_prices_img,
        properties: {
          fair_rounding: false,
          company_name: false,
          extra_charge: false,
          round_price: false,
        }
      },
      {
        name: 'Обычная рекламная листовка',
        value: 'flyers4',
        grid: {
          table: 16,
          columns: 4,
        },
        description: 'Это простая рекламная листовка.',
        imege_preview: image_prices_img,
        properties: {
          fair_rounding: false,
          company_name: false,
          extra_charge: false,
          round_price: false,
        }
      },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    ]
  },
  //{
  //  id: 3,
  //  name: 'Коммерческое предложение',
  //  value: 'business-offer',
  //  options: [
  //    
  //  ]
  //},
];