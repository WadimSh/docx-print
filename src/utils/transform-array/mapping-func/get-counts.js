const getCounts = (items, multi) => {
  if (items.length === 0) return `${multi} шт`;
  const foundItem = items.find(([_, str]) => {
    const numFromStr = parseInt(str.split(" ")[0]);
    return numFromStr === multi;
  });
  return foundItem ? foundItem[1] : `${multi} шт`;
};

export default getCounts;