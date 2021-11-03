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

// using recursion
const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];

  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;

    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }

  memo[targetSum] = false;
  return false;
};

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
