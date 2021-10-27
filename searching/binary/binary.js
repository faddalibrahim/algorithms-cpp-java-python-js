const array = [3, 5, 6, 9, 11, 18, 20, 21, 24, 30];

function binarySearchRecursive(
  array,
  target,
  start = 0,
  end = array.length - 1
) {
  let middle = Math.floor((start + end) / 2);

  if (array[middle] === target) {
    return middle;
  } else if (array[middle] > target) {
    end = middle - 1;
    return binarySearchRecursive(array, target, start, end);
  } else {
    start = middle + 1;
    return binarySearchRecursive(array, target, start, end);
  }
}

console.log(binarySearchRecursive(array, 3)); // 0
console.log(binarySearchRecursive(array, 6)); // 2
console.log(binarySearchRecursive(array, 20)); // 6

function binarySearchIterative(
  array,
  target,
  start = 0,
  end = array.length - 1
) {
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (array[middle] === target) {
      return middle;
    } else if (array[middle] > target) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
}

console.log(binarySearchIterative(array, 30)); // 9
console.log(binarySearchIterative(array, 18)); // 5
console.log(binarySearchIterative(array, 21)); // 7
