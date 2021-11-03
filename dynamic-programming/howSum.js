/**
 *
 * write a function howSum(targetSum, numbers)
 * that takes in a targetSum and an array of numbers as arguments
 *
 * the function should return an array containing any combination of elements
 * that add up to exactly the targetSum
 *
 * If there is no combination then return null.
 *
 * If there are multiple combinations, you may return any single one
 *
 */

// O(n^2) -- time complexity
// O(1) -- space complexity
// const howSum = (targetSum, numbers) => {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === targetSum) return numbers[i];
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === targetSum)
//         return [numbers[i], numbers[j]];
//     }
//   }
//   return null;
// };

// O(n) using hash map
// O(n) space complexity
// const howSum = (targetSum, numbers) => {
//   const remainders = {};
//   for (number of numbers) {
//     remainders[number] = targetSum - number;
//     if (remainders[number] in remainders) return true;
//   }
//   return false;
// };

const howSum = (targetSum, numbers) => {
  const remainders = {};
  for (number of numbers) {
    remainders[number] = targetSum - number;
    if (remainders[number] in remainders) return true;
  }
  return false;
};

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 5, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));
