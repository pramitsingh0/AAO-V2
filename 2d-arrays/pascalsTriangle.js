// For example, here are the first 5 levels of Pascal's triangle:
//       1
//      1 1
//     1 2 1
//    1 3 3 1
//   1 4 6 4 1

// Your code here
let pascalsTriangle = function(size) {
  let result = [];
  for (let i = 0; i < size; i++) {
    if (result.length < 1) result.push([1]);
    else if (result.length === 1) result.push([1, 1]);
    else {
      let base = adjancentSum(result[i - 1]);
      base.push(1);
      base.unshift(1);
      result.push(base);
    }
  }
  return result;
}

let adjancentSum = function(arr) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    result.push(arr[i] + arr[i + 1]);
  }
  return result;
}



console.log(pascalsTriangle(5));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]
console.log(pascalsTriangle(7));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1],
//     [1, 5, 10, 10, 5, 1],
//     [1, 6, 15, 20, 15, 6, 1]
// ]
