const getBarcode = (array) => {
  const array_base_one = array.measure_units_properties.find(item => item[0] === "Баз. ед.");
  let index = array_base_one[1].findIndex(value => value === `${array.multiplicity} шт`);
  if (index === -1) {
    index = array_base_one[1].findIndex(value => value === '1 шт');
  }
  return array.measure_units_properties.find(item => item[0] === "Штрих код. ед.")[1][index];
};

export default getBarcode;