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
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
};

// console.log(gridTraveller(0, 5));
// console.log(gridTraveller(5, 0));
// console.log(gridTraveller(1, 1));
// console.log(gridTraveller(2, 3));
// console.log(gridTraveller(3, 3));
// console.log(gridTraveller(18, 18));

console.log(gridTraveller(1, 2));
console.log(gridTraveller(2, 1));
console.log(gridTraveller(1, 3));
console.log(gridTraveller(3, 1));
console.log(gridTraveller(2, 3));
console.log(gridTraveller(3, 2));
console.log(gridTraveller(4, 3));
console.log(gridTraveller(3, 4));
