const getValue = (properties, ...names) => {
  for (const name of names) {
    const property = properties.find(prop => prop.name === name);
    if (property?.value) return property.value;
  }
  return ''; 
};

export default getValue;