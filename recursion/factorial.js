const factorial = (num) => {
  return num === 0 ? 1 : num * factorial(num - 1);
};

console.log(factorial(5));

// call stack
// |                                                                               |
// | 5 * factorial(4) * factorial(3) * factorial(2) * factorial(1) * factorial(0); |
// | 5 * factorial(4) * factorial(3) * factorial(2) * factorial(1);                |
// | 5 * factorial(4) * factorial(3) * factorial(2);                               |
// | 5 * factorial(4) * factorial(3);                                              |
// | 5 * factorial(4);                                                             |
// | factorial(5)_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |

// ok now the base case is hit
5 * factorial(4) * factorial(3) * factorial(2) * factorial(1) * 1;
