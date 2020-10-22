
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix===undefined) return [];

  let res = [];
  let index = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i % 2 === 0) {
        res[index] = matrix[i][j];
      } else {
        res[index] = matrix[i][matrix[i].length-1-j];
      }
      index++;
    }
  }
  
  return res;
}
