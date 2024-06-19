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