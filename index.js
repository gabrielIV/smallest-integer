findSmallest = (arr) => {
  var smallest;
  arr.sort();

  for (var i = 0; i < arr.length; i++) {
    if (i && arr[i] - arr[i - 1] > 1 && arr[i - 1] + 1 > 0) {
      smallest = arr[i - 1] + 1;
      break;
    }
  }
  return smallest || 1;
};

console.log(findSmallest([3, 2, 2, 5, 6, 8, -2, -3]));
