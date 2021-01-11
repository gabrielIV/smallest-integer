// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  var arr = A;
  var smallest = null;
  //   sort array
  arr.sort((a, b) => a - b);

  if (arr[0] > 1) return 1;

  var count = 0;
  let len = arr.length;
  //loop through array
  for (var i = 0; i < arr.length; i++) {
    count++;
    // find difference between adjascent array items
    // if difference > 1 smallest number not in array is found
    if (i && arr[i] - arr[i - 1] > 1 && arr[i - 1] + 1 > 0) {
      smallest = arr[i - 1] + 1;
      break;
    }
  }

  if (!smallest && count === len && len > 1) smallest = arr[len - 1] + 1;

  if (len === 1) smallest = arr[0] - 1;

  if (smallest < 1) return 1;

  return smallest;
}

console.log(solution([1]));
