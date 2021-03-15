
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArray = [];
  if (matrix == undefined) {
		return newArray;
  } else {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2) {
      matrix[i].reverse();
      newArray = matrix;
      }
    }
  }
  return newArray.flat();
}



