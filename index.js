findSmallest = (arr) => {
  var smallest;
  //   sort array
  arr.sort();

  //loop through array
  for (var i = 0; i < arr.length; i++) {
    //   find difference between adjascent array items
    // if difference > 1 smallest number in array is found
    if (i && arr[i] - arr[i - 1] > 1 && arr[i - 1] + 1 > 0) {
      smallest = arr[i - 1] + 1;
      break;
    }
  }
  if (smallest) return smallest;
  return arr[arr.length - 1] > 0 ? arr[arr.length - 1] + 1 : 1;
};

console.log(findSmallest([1, 2, 3]));
