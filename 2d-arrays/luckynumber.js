// iterate through each row to find the minimum
// iterate through each column to find the maximum in each column
function luckyNumbers(matrix) {
  // your code here...
  let result = [];
  let maxInColumns = maxColumn(matrix);
  for (let i = 0; i < matrix.length; i++) {
    let minInRow = minRow(matrix[i]);
    if (maxInColumns.indexOf(minInRow) > -1) result.push(minInRow);
  }
  return result;
}

function minRow(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

function maxColumn(matrix) {
  let result = [];
  for (let j = 0; j < matrix[0].length; j++) {
    let max = matrix[0][j];
    // console.log(max)
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][j] > max) max = matrix[i][j];
    }
    result.push(max);
  }
  return result;
}
matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]
console.log(luckyNumbers(matrix)); // [12]

matrix = [[ 5, 10,  8,  6],
          [10,  2,  7,  9],
          [21, 15, 19, 10]]
console.log(luckyNumbers(matrix)); // [10]
