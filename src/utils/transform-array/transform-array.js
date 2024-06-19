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
    return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const getValue = (properties, ...names) => {
    for (const name of names) {
      const property = properties.find(prop => prop.name === name);
      if (property?.value) return property.value;
    }
    return '';
  };

  data.forEach(item => {
    const newObj = {
      image: item.images[0].image,
      company: company,
      code: item.code,
      name: item.name.replace(/\s+/g, ' '),
      value: getValue(item.origin_properties, "Торговая марка", "Страна"),
      multiplicity: item.multiplicity,
      units1: item.units_counts[0] ? item.units_counts[0][0] : '',
      units2: item.units_counts[0] ? item.units_counts[0][1] : '',
      price1: formatPrice(item.measure_prices[0].price.currency_price, profit, item.multiplicity, round),
      price2: formatСost(item.measure_prices[0].price.currency_price, profit, item.multiplicity, round),
    };
    newArray.push(newObj);
  });

  return newArray;
};

export default transformArray;