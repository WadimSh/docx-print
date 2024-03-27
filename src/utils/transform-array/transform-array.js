const transformArray = (data, profit, company) => {
  const newArray = [];
  data.forEach(item => {
    const newObj = {
      company: company,
      code: item.code,
      name: item.name.replace(/\s+/g, ' '),
      value: item.origin_properties.find(prop => prop.name === "Торговая марка")?.value || item.origin_properties.find(prop => prop.name === "Страна")?.value || '',
      multiplicity: item.multiplicity,
      units1: item.units_counts[0] ? item.units_counts[0][0] : '',
      units2: item.units_counts[0] ? item.units_counts[0][1] : '',
      price1: (item.measure_prices[0].price.currency_price * (1 + profit / 100)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
      price2: (((item.measure_prices[0].price.currency_price * (1 + profit / 100)).toFixed(2)) * item.multiplicity).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
    };
    newArray.push(newObj);
  });
  return newArray;
};

export default transformArray;