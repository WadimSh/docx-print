const transformArray = (data, profit, company) => {
  const newArray = [];
  const price1 = (value1, value2) => (value1 * (1 + value2 / 100)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const price2 = (value1, value2, value3) => (((value1 * (1 + value2 / 100)).toFixed(2)) * value3).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  
  data.forEach(item => {
    const newObj = {
      company: company,
      code: item.code,
      name: item.name.replace(/\s+/g, ' '),
      value: item.origin_properties.find(prop => prop.name === "Торговая марка")?.value || item.origin_properties.find(prop => prop.name === "Страна")?.value || '',
      multiplicity: item.multiplicity,
      units1: item.units_counts[0] ? item.units_counts[0][0] : '',
      units2: item.units_counts[0] ? item.units_counts[0][1] : '',
      price1: price1(item.measure_prices[0].price.currency_price, profit),
      price2: price2(item.measure_prices[0].price.currency_price, profit, item.multiplicity),
    };
    newArray.push(newObj);
  });
  return newArray;
};

export default transformArray;