const nums = [3, 5, 6, 9, 11, 18, 20, 21, 24, 30];

function binarySearch(
  numsArray,
  numFind,
  start = 0,
  end = numsArray.length - 1
) {
  let middle = Math.floor((start + end) / 2);

  if (numsArray[middle] === numFind) {
    return middle;
  } else if (numsArray[middle] > numFind) {
    end = middle - 1;
    return binarySearch(numsArray, numFind, start, end);
  } else {
    start = middle + 1;
    return binarySearch(numsArray, numFind, start, end);
  }
}

console.log(binarySearch(nums, 30)); // 2
console.log(binarySearch(nums, 18)); // 5
console.log(binarySearch(nums, 21)); // 7
