import roundNumber from "./round-number";

const formatPrice = (price, profit, multiplicity, round) => {
  let result = (price * (1 + profit / 100)).toFixed(2);
  if (round) {
    return result = (roundNumber(result * multiplicity) / multiplicity).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export default formatPrice;