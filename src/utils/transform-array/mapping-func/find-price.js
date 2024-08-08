const findPrice = (items) => {
  const priceObj = items.measure_prices.find(item => item.measure_unit.name === items.multiplicity_measure_unit);
  return priceObj ? priceObj.price.currency_price : null;
};

export default findPrice;