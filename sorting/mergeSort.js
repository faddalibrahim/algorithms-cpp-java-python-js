const merge = (data, start, mid, end) => {
  // build temporary array to avoid modifying the original content
  let array_temp = [];

  let i = start,
    j = mid + 1,
    k = 0;

  // while both sub-array have values, then merge them in sorted order
  while (i <= mid && j <= end) {
    if (data[i] <= data[j]) {
      array_temp[k++] = data[i++];
    } else {
      temp[k++] = data[j++];
    }
  }

  //add the rest of the values from the left sub array into the result
  while (i <= mid) temp[k++] = data[i++];

  //add the rest of the values from the right sub array into the result
  while (j <= end) temp[k++] = data[j++];
};

const mergeSort = (array, start, end) => {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    mergeSort(array, start, mid);
    mergeSort(array, mid + 1, end);
    // merge(data, start, mid, end);
  }
  console.log("hello");
};

mergeSort([8, 12, 3, 5, 10, 7], (start = 0), (end = array.length - 1));
