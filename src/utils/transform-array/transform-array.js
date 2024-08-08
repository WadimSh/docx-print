import formatPrice from "./mapping-func/format-price";
import formatСost from "./mapping-func/format-cost";
import getValue from "./mapping-func/get-value";
import imageLink from "./mapping-func/image-link";
import getUnits from "./mapping-func/get-units";
import getCounts from "./mapping-func/get-counts";

const transformArray = (data, profit, company, round) => {
  const newArray = [];

  data.forEach(item => {
    if (item.measure_prices) {
      const newObj = {
        company: company,                                                                                  //наименование юр.лица
        code: item.code,                                                                                   //артикул товара
        image: imageLink(item.images),                                                                     //ссылка на изображение товара
        name: item.name.replace(/\s+/g, ' '),                                                              //наименование товара
        origin: getValue(item.origin_properties, "Торговая марка", "Страна"),                              //наименования торговой марки или страны происхождения
        multiplicity: item.multiplicity,                                                                   //иминимальное колличество продажи
        units: getUnits(item.units_counts, item.multiplicity),                                             //наименование минимальной единицы продажи
        counts: getCounts(item.units_counts, item.multiplicity),                                           //колличество в шт в минимальной партии
        price: formatPrice(item, profit, round),                                                           //цена за штуку
        cost: formatСost(item, profit, round),                                                             //цена за минимальную партию продажи
      };
      newArray.push(newObj);
    } else {
      console.error(`Отсутствует информация о цене для элемента с кодом ${item.code}`);
    }
  });

  return newArray;
};

export default transformArray;