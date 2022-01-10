/*write a function to add up the sum of each row in
 a matrix of arbitrary size, and return an array with the appropriate values.*/

function sumMatrix(matrix) {
  return matrix.map((ele) => {
    return ele.reduce((acc, cur) => {
      return acc + cur;
    });
  });
}

console.log(
  sumMatrix([
    [1, 2, 3],
    [3, 5, 7],
    [1, 7, 10],
  ])
);

//sole usinf for loop
function sumMatrix2(matrix) {
  let newArr = [];
  for (i = 0; i < matrix.length; i++) {
    let sum = 0;
    for (j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
    newArr.push(sum);
  }
  return newArr;
}

console.log(
  sumMatrix2([
    [1, 2, 3],
    [3, 5, 7],
    [1, 7, 10],
  ])
);
