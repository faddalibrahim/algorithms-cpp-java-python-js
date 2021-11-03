const naturalNumbersSum = (count) => {
  if (count < 1) return count;
  return count + naturalNumbersSum(count - 1);
};

console.log(naturalNumbersSum(10));
