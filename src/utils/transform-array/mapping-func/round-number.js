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

export default roundNumber;