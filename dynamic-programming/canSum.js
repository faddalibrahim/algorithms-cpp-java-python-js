/**
 * write a function `canSum(targetSum, numbers)` that takes in
 * a targetSum and an array of numbers as arguments.
 *
 * the function should return a boolean indicating
 * whether it is possible to generate the targetSum
 * using numbers from the array
 *
 */

// O(n^2) -- time complexity
// O(1) -- space complexity
// const canSum = (targetSum, numbers) => {
//   for (let i = 0; i < numbers.length - 1; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === targetSum) return true;
//     }
//   }
//   return false;
// };

// O(n) using hash map
// O(n) space complexity
const canSum = (targetSum, numbers) => {
  const remainders = {};
  for (number of numbers) {
    remainders[number] = targetSum - number;
    if (remainders[number] in remainders) return true;
  }
  return false;
};

console.log(canSum(12, [1, 2, 3, 4, 6, 7, 8]));
console.log(canSum(3, [1, 2, 3, 4, 6, 7, 8]));
console.log(canSum(10, [1, 2, 3, 4, 6, 7, 8]));
console.log(canSum(15, [1, 2, 3, 4, 6, 7, 8]));
console.log(canSum(13, [1, 2, 3, 4, 6, 7, 8]));
console.log(canSum(7, [1, 2, 3, 4, 6, 7, 8]));
console.log(canSum(100, [1, 2, 3, 4, 6, 7, 8]));
console.log(canSum(8, [1, 2, 3, 4, 6, 7, 8]));

// using recursion
const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers)) return true;
  }

  return false;
};
