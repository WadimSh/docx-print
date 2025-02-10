import small_prices_img from '../assets/images/small-prices.png';
import barcode_img_prices_img from '../assets/images/barcode-img-prices.png';
import image_prices_img from '../assets/images/image-prices.png';
import barcode_prices_img from '../assets/images/barcode-prices.png';
import small_barcode_prices_img from '../assets/images/small-barcode-prices.png';
import one_products_flyers_img from '../assets/images/one-products-flyers.png';
import four_products_flyers_img from '../assets/images/four-products-flyers.png';
import nine_products_flyers_img from '../assets/images/nine-products-flyers.png';
import sixteen_products_flyers_img from '../assets/images/sixteen-products-flyers.png';

export const config = [
  {
    id: 1,
    name: 'Ценники для магазина',
    value: 'prices',
    options: [
      {
        name: 'на крючок, размером 40х50 мм',
        value: 'small-prices',
        grid: {
          table: 28,
          columns: 4,
        },
        description: 'Эти ценники имеют размер 4x5 см и содержат информацию о товаре. На них указано название компании (до 25 символов), артикул товара, его название, а также торговая марка производителя или страна происхождения в нижней части. Если товар продается поштучно, то указана цена за одну штуку. Если продается в большом количестве, то помимо цены за штуку также указана цена за минимальную партию поставки. Ниже приведен пример создаваемого документа с указанными ценниками.',
        image_preview: small_prices_img,
        properties: {
          title_flyers: false,
          label_company: false,
          label_requisites: false,
          fair_rounding: false,
          company_name: true,
          extra_charge: true,
          round_price: true,
        }
      },
      {
        name: 'на крючок, размером 40х50 мм со штрих-кодом',
        value: 'small-barcode-prices',
        grid: {
          table: 28,
          columns: 4,
        },
        description: 'Эти ценники имеют размер 4x5 см и содержат информацию о товаре, включая название компании (до 25 символов), артикул, название и бренд/страну изготовителя. Если товар продается поштучно, указана цена за одну штуку. Если продается оптом, указана цена за единицу и за минимальную партию. Также указан штрих-код минимальной единицы продажи. Ниже приведен пример документа с такими ценниками.',
        image_preview: small_barcode_prices_img,
        properties: {
          title_flyers: false,
          label_company: false,
          label_requisites: false,
          fair_rounding: true,
          company_name: true,
          extra_charge: true,
          round_price: true,
        }
      },
      {
        name: 'на крючок, размером 40х60 мм со штрих-кодом',
        value: 'barcode-prices',
        grid: {
          table: 21,
          columns: 3,
        },
        description: 'Эти ценники имеют размер 4x6 см и содержат информацию о товаре, включая название компании (до 25 символов), артикул, название и бренд/страну изготовителя. Если товар продается поштучно, указана цена за одну штуку. Если продается оптом, указана цена за единицу и за минимальную партию. Также указан штрих-код минимальной единицы продажи. Ниже приведен пример документа с такими ценниками.',
        image_preview: barcode_prices_img,
        properties: {
          title_flyers: false,
          label_company: false,
          label_requisites: false,
          fair_rounding: true,
          company_name: true,
          extra_charge: true,
          round_price: true,
        }
      },
      {
        name: 'на крючок, размером 40х100 мм с картинкой',
        value: 'image-prices',
        grid: {
          table: 14,
          columns: 2,
        },
        description: 'Эти ценники имеют размер 4x10 см с информацией о товаре. На них есть название компании (до 25 символов), изображение товара, а также артикул, название и бренд/страна изготовителя. Если товар продаётся поштучно, указана цена за одну штуку. Если продаётся в большом количестве, указана цена за единицу и за минимальную партию поставки. Ниже приведен пример создаваемого документа с указанными ценниками.',
        image_preview: image_prices_img,
        properties: {
          title_flyers: false,
          label_company: false,
          label_requisites: false,
          fair_rounding: false,
          company_name: true,
          extra_charge: true,
          round_price: true,
        }
      },
      {
        name: 'на крючок, размером 40х100 мм с картинкой и штрих-кодом',
        value: 'image-barcode-prices',
        grid: {
          table: 14,
          columns: 2,
        },
        description: 'Эти ценники имеют размер 4x10 см и содержат информацию о товаре, включая название компании (до 25 символов), изображение товара, артикул, название и бренд/страну изготовителя. Если товар продается поштучно, указана цена за одну штуку. Если продается оптом, указана цена за единицу и за минимальную партию. Также указан штрих-код минимальной единицы продажи. Ниже приведен пример документа с такими ценниками.',
        image_preview: barcode_img_prices_img,
        properties: {
          title_flyers: false,
          label_company: false,
          label_requisites: false,
          fair_rounding: true,
          company_name: true,
          extra_charge: true,
          round_price: true,
        }
      },
      {
        name: 'на крючок, размером 40х200 мм с картинкой',
        value: 'image-prices',
        grid: {
          table: 14,
          columns: 2,
        },
        description: 'Эти ценники имеют размер 4x20 см с информацией о товаре. На них есть название компании (до 25 символов), изображение товара, а также артикул, название и бренд/страна изготовителя. Если товар продаётся поштучно, указана цена за одну штуку. Если продаётся в большом количестве, указана цена за единицу и за минимальную партию поставки. Ниже приведен пример создаваемого документа с указанными ценниками.',
        image_preview: image_prices_img,
        properties: {
          title_flyers: false,
          label_company: false,
          label_requisites: false,
          fair_rounding: false,
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
        name: 'формата А4, по одному товару на странице',
        value: 'one-products-flyers',
        grid: {
          table: 1,
          columns: 1,
        },
        description: 'Создаваемый файл представляет собой рекламную листовку, которая может стать эффективным инструментом для привлечения новых клиентов или для украшения вашего магазина. На каждой странице листовки представлен один товар, включая его изображение, артикул и название. Ниже представлен пример документа, содержащего такую листовку.',
        image_preview: one_products_flyers_img,
        properties: {
          title_flyers: true,
          label_company: true,
          label_requisites: true,
          fair_rounding: false,
          company_name: false,
          extra_charge: false,
          round_price: false,
        }
      },
      {
        name: 'формата А4, по 4 товара на странице, расположенные в сетке 2х2',
        value: 'four-products-flyers',
        grid: {
          table: 4,
          columns: 2,
        },
        description: 'Этот файл представляет собой рекламную листовку, которая может быть полезна для привлечения новых клиентов или для украшения вашего магазина. В листовке представлены по четыре товара на одной странице, включая их изображения, артикулы и названия. Ниже показан пример документа, содержащего эту листовку.',
        image_preview: four_products_flyers_img,
        properties: {
          title_flyers: true,
          label_company: true,
          label_requisites: true,
          fair_rounding: false,
          company_name: false,
          extra_charge: false,
          round_price: false,
        }
      }, 
      {
        name: 'формата А4, по 9 товаров на странице, расположенные в сетке 3х3',
        value: 'nine-products-flyers',
        grid: {
          table: 9,
          columns: 3,
        },
        description: 'Этот файл представляет собой рекламную листовку, которая может быть полезна для привлечения новых клиентов или для украшения вашего магазина. В листовке представлены по девять товаров на одной странице, включая их изображения, артикулы и названия. Ниже показан пример документа, содержащего эту листовку.',
        image_preview: nine_products_flyers_img,
        properties: {
          title_flyers: true,
          label_company: true,
          label_requisites: true,
          fair_rounding: false,
          company_name: false,
          extra_charge: false,
          round_price: false,
        }
      },
      {
        name: 'формата А4, по 16 товаров на странице, расположенные в сетке 4х4',
        value: 'sixteen-products-flyers',
        grid: {
          table: 16,
          columns: 4,
        },
        description: 'Этот файл представляет собой рекламную листовку, которая может быть полезна для привлечения новых клиентов или для украшения вашего магазина. В листовке содержится информация по шестнадцать товаров на странице, включая их изображения, артикулы и названия. Ниже представлен пример документа с указанной листовкой.',
        image_preview: sixteen_products_flyers_img,
        properties: {
          title_flyers: true,
          label_company: true,
          label_requisites: true,
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