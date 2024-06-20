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

  const imageLink = (items) => {
    let images = items.find(item => item.is_base);
    return images.image
  };
  
  data.forEach(item => {
    const newObj = {
      company: company,
      code: item.code,
      image: imageLink(item.images),
      name: item.name.replace(/\s+/g, ' '),
      origin: getValue(item.origin_properties, "Торговая марка", "Страна"),
      multiplicity: item.multiplicity,
      units: item.units_counts[0] ? item.units_counts[0][0] : '',
      counts: item.units_counts[0] ? item.units_counts[0][1] : '',
      price: formatPrice(item.measure_prices[0].price.currency_price, profit, item.multiplicity, round),
      cost: formatСost(item.measure_prices[0].price.currency_price, profit, item.multiplicity, round),
    };
    newArray.push(newObj);
  });

  return newArray;
};

export default transformArray;