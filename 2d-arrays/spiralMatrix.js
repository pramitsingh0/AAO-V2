function spiralOrder(matrix) {
  // your code here...
  let result = [];
  let rowStart = 0, columnStart = 0, rowEnd = matrix.length - 1, columnEnd = matrix[0].length - 1;
  while(rowStart <= rowEnd && columnStart <= columnEnd) {
    for (let i = columnStart; i <= columnEnd; i++){
      result.push(matrix[rowStart][i]);
    }
    rowStart++;
    for (let i = rowStart; i <= rowEnd; i++) {
      result.push(matrix[i][columnEnd])
    }
    columnEnd--;
    if (rowStart > rowEnd || columnEnd < columnStart) break;
    for (let i = columnEnd; i >= columnStart; i--) {
      result.push(matrix[rowEnd][i]);
    }
    rowEnd--;
    for (let i = rowEnd; i >= rowStart; i--) {
      result.push(matrix[i][columnStart]);
    }
    columnStart++;
  }
  return result
}


matrix = [[ 1, 2, 3],
          [ 4, 5, 6],
          [ 7, 8, 9]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9,10,11,12]]


console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]
