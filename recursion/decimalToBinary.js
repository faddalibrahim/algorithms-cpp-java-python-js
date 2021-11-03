const decimalToBinary = (number) => {
  if (number % 2 === number) return number;
  return decimalToBinary(number / 2 - (number % 2) / 2) + String(number % 2);
};

// const decimalToBinary = (number) => {
//   if (number < 2) return number;
//   return decimalToBinary(number / 2) + String(number % 2);
// };

console.log(decimalToBinary(233));
