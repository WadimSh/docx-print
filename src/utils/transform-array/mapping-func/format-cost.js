import roundNumber from "./round-number";
import findPrice from "./find-price";

const formatСost = (item, profit, round) => {
  let price = findPrice(item);
  if (price === null) {
    return null;
  }
  let result = (((price * (1 + profit / 100)).toFixed(2)) * item.multiplicity).toFixed(2);
  if (round) {
    return result = roundNumber(result).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export default formatСost;