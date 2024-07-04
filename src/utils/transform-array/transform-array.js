const transformArray = (data, profit, company, round) => {
  const newArray = [];
    
  const roundNumber = (number) => {
    const thresholds = [20, 50, 100, 200];
    const factors = [10, 2, 1, 5, 10];
    for (let i = 0; i < thresholds.length; i++) {
      if (number <= thresholds[i]) {
        return Math.floor(number * factors[i]) / factors[i];
      }
    }
    return Math.floor(number / factors[factors.length - 1]) * factors[factors.length - 1];
  };

  const formatPrice = (price, profit, multiplicity, round) => {
    let result = (price * (1 + profit / 100)).toFixed(2);
    if (round) {
      return result = (roundNumber(result * multiplicity) / multiplicity).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
    return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const formatСost = (price, profit, multiplicity, round) => {
    let result = (((price * (1 + profit / 100)).toFixed(2)) * multiplicity).toFixed(2);
    if (round) {
      return result = roundNumber(result).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
    return result = '';
  };

  const getValue = (properties, ...names) => {
    for (const name of names) {
      const property = properties.find(prop => prop.name === name);
      if (property?.value) return property.value;
    }
    return '';
  };

  const imageLink = (items) => {
    if (items.image) {
      let images = items.find(item => item.is_base);
      return images.image
    } else {
      console.error(`Отсутствует ссылка на картинку`);
    }
  };
  
  data.forEach(item => {
    if (item.measure_prices[0] && item.measure_prices[0].price) {
      const newObj = {
        company: company,                                                                                  //наименование юр.лица
        code: item.code,                                                                                   //артикул товара
        image: imageLink(item.images),                                                                     //ссылка на изображение товара
        name: item.name.replace(/\s+/g, ' '),                                                              //наименование товара
        origin: getValue(item.origin_properties, "Торговая марка", "Страна"),                              //наименования торговой марки или страны происхождения
        multiplicity: item.multiplicity,                                                                   //иминимальное колличество продажи
        units: item.units_counts[0] ? item.units_counts[0][0] : '',                                        //наименование минимальной единицы продажи
        counts: item.units_counts[0] ? item.units_counts[0][1] : '',                                       //колличество в шт в минимальной партии
        price: formatPrice(item.measure_prices[0].price.currency_price, profit, item.multiplicity, round), //цена за штуку
        cost: formatСost(item.measure_prices[0].price.currency_price, profit, item.multiplicity, round),   //цена за минимальную партию продажи
      };
      newArray.push(newObj);
    } else {
      console.error(`Отсутствует информация о цене для элемента с кодом ${item.code}`);
    }
  });

  return newArray;
};

export default transformArray;