const transformArray = (data, profit, company, round) => {
  const newArray = [];
    
  const roundNumber = (number) => {
    if (number > 10 && number < 20) {
      return Math.floor(number * 10) / 10;
    } else if (number > 20 && number < 50) {
      return Math.floor(number * 2) / 2;
    } else if (number > 50 && number < 100) {
      return Math.floor(number);
    } else if (number > 100 && number < 200) {
      return Math.floor(number / 5) * 5;
    } else if (number > 200) {
      return Math.floor(number / 10) * 10;
    }
    return number;
  };

  const price1 = (value1, value2) => (value1 * (1 + value2 / 100)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const price2 = (value1, value2, value3) => (((value1 * (1 + value2 / 100)).toFixed(2)) * value3).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  const price1round = (value1, value2, value3) => (roundNumber((((value1 * (1 + value2 / 100)).toFixed(2)) * value3)) / value3).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const price2round = (value1, value2, value3) => roundNumber((((value1 * (1 + value2 / 100)).toFixed(2)) * value3)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  
  data.forEach(item => {
    const newObj = {
      image: item.images[0].image,
      company: company,
      code: item.code,
      name: item.name.replace(/\s+/g, ' '),
      value: item.origin_properties.find(prop => prop.name === "Торговая марка")?.value || item.origin_properties.find(prop => prop.name === "Страна")?.value || '',
      multiplicity: item.multiplicity,
      units1: item.units_counts[0] ? item.units_counts[0][0] : '',
      units2: item.units_counts[0] ? item.units_counts[0][1] : '',
      price1: round ? price1round(item.measure_prices[0].price.currency_price, profit, item.multiplicity) : price1(item.measure_prices[0].price.currency_price, profit),
      price2: round ? price2round(item.measure_prices[0].price.currency_price, profit, item.multiplicity) : price2(item.measure_prices[0].price.currency_price, profit, item.multiplicity),
    };
    newArray.push(newObj);
  });

  return newArray;
};

export default transformArray;