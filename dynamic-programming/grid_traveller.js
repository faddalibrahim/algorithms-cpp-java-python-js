/**
 * say that you are a traveller on a 2D grid.
 * You begin at the top left corner and your goal
 * is to travel to the bottom right corner.
 *
 * You may only move down or right
 *
 * In how many ways can you travel to the goal
 * on a grid of with m x n dimensions
 *
 */

/**
 * example 2 x 3 grid
 *  | . |   |   |
 *  |   |   |   |
 *
 * in every move, we are either reducing the number rows or columns
 * downward movement -> reduces the rows
 * rightward movement -> reduces columns
 *
 * gridTraveller(m,n) === gridTraveller(n,m)
 */

//                2,3
//             /      \
//            1,3       2,2
//           /   \      /  \
//          0,3  1,2   1,2  2,1
//                / \    |    /   \
//            0,2   1,1  |   1,1 0,0
//                       |
//                      / \
//                    0,2  1,1

const gridTraveller = (m, n, memo = {}) => {
  const key = `${m},${n}`;
  const keyy = `${n},${m}`;
  if ((key || keyy) in memo) return memo[key];
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  memo[key] = memo[keyy] =
    gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
  return memo[key];
};

console.log(gridTraveller(0, 5));
console.log(gridTraveller(5, 0));
console.log(gridTraveller(1, 1));
console.log(gridTraveller(2, 3));
console.log(gridTraveller(3, 3));
console.log(gridTraveller(7, 7));
console.log(gridTraveller(18, 18));
