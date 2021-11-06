const merge = (data, start, mid, end) => {
  // build temporary array to avoid modifying the original content
};

const mergeSort = (array, start, end) => {
  if (start < end) {
    let mid = (start + end) / 2;
    mergeSort(array, start, mid);
    mergeSort(array, mid + 1, end);
    merge(data, start, mid, end);
  }
};
