const getUnits = (items, multi) => {
  if (items.length === 0) return 'по';
  const foundItem = items.find(([_, str]) => {
    const numFromStr = parseInt(str.split(" ")[0]);
    return numFromStr === multi;
  });
  return foundItem ? foundItem[0] : 'по';
};

export default getUnits;