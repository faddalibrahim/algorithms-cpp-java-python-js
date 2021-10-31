/**
 *
 * write a function `fib(n)` that takes in a number as an argument
 * The function should return the `nth` number of the fibonacci sequence
 *
 * O(2 to the power n time complexity)
 * O(n) space complexity
 *
 */

const fib = (n) => {
  return n <= 2 ? 1 : fib(n - 1) + fib(n - 2);
};

/**
 *
 * Using Memoization
 * use a fast access data structure (maps)
 * keys -> argument to the function
 * value will be the return value
 *
 */

const fibb = (n, memo = {}) => {
  if (n in memo) return memo[n];
  memo[n] = n <= 2 ? 1 : fibb(n - 1, memo) + fibb(n - 2, memo);
  return memo[n];
};

console.log(fibb(100));
