//challenge 7 not solve
/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review
Write a function named returnTen, takes in a string and uses split and splice to return the last 10 characters from that string as elements of an array.
------------------------------------------------------------------------------------------------ */
function returnTen(str) {
  //split===>string to array===>returna array

  let strArr = str.split("");

  removed = strArr.splice(-10, 10);
  return removed;
}

console.log(returnTen("hello world"));
console.log(returnTen("world"));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function named findMax that takes in a matrix of positive numbers and returns the number with the highest value.
For example:
[
  [1, 3, 4, 5],
  [4, 5, 6],
  [23, 5, 5]
]
return: 23
------------------------------------------------------------------------------------------------ */
let mat = [
  [1, 3, 4, 5],
  [4, 5, 6],
  [23, 5, 5],
];

function findMax(matrix) {
  let maxNum = 0;
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > maxNum) {
        maxNum = matrix[i][j];
      }
    }
  }
  return maxNum;
}
console.log(findMax(mat));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function named totalSum that takes in a matrix of numbers and returns the totalSum of all the numbers.
For example:
[
  [1, 3, 4, 5],
  [4, 5, 1],
  [2, 5, 5]
]
return: 35
------------------------------------------------------------------------------------------------ */
let mat2 = [
  [1, 3, 4, 5],
  [4, 5, 1],
  [2, 5, 5],
];

function totalSum(matrix) {
  let sum = 0;
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}
console.log(totalSum(mat2));
//for...of
//for...in
function totalSum2(matrix) {
  let sum = 0;
  for (let i in matrix) {
    for (let j in matrix[i]) {
      sum += matrix[i][j];
    }
  }
  return sum;
}
console.log(totalSum2(mat2));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
You friend Pat has a chain of stores around the greater Seattle area. He specializes in selling salmon cookies. Pat has data for the hourly sales of cookies per hour for each store. He wants to create an array of the total number of cookies sold per hour for all of his stores combined.
Write a function named grandTotal that adds up the cookies sales for each hour of operation for all of the stores combined. For example, the first element in the hourlySales array should be the sum of the cookies sold in the 9:00 a.m. hour at all five stores combined.
For this example, the total at 9:00 a.m. is 17 + 26 + 7 + 5 + 33, or 88 total cookies.
Return the array of the total number of cookies sold per hour for all of the stores combined.
------------------------------------------------------------------------------------------------ */
const hoursOpen = [
  "9 a.m.",
  "10 a.m.",
  "11 a.m.",
  "12 p.m.",
  "1 p.m.",
  "2 p.m.",
  "3 p.m.",
  "4 p.m.",
  "5 p.m.",
  "6 p.m.",
  "7 p.m.",
  "8 p.m.",
];

const firstPike = [17, 18, 23, 24, 24, 12, 13, 27, 30, 20, 24, 18];
const seaTac = [26, 5, 5, 59, 23, 39, 38, 20, 30, 7, 59, 43];
const seattleCenter = [7, 14, 19, 22, 15, 4, 23, 27, 28, 23, 1, 29];
const capHill = [5, 85, 58, 51, 50, 13, 33, 32, 47, 94, 31, 62];
const alkiBeach = [33, 31, 147, 130, 27, 93, 38, 126, 141, 63, 46, 17];

const cookieStores = [firstPike, seaTac, seattleCenter, capHill, alkiBeach];

const grandTotal = (cookieStores) => {
  let total = [];
  for (let i in hoursOpen) {
    let totalHour = 0;
    for (let j in cookieStores) {
      totalHour += cookieStores[j][i];
    }
    total.push(totalHour);
  }
  return total;
};

console.log(grandTotal(cookieStores)); //[88, 153, 252, 286, 139, 161, 145, 232, 276, 207, 161, 169]

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5
Pat has decided that he would also like to organize his data as objects containing the number of cookies sold per hour and the time.
Here is sample data for the 9:00 sales: { sales: '88 cookies', time: '9 a.m.' }.
Write a function named salesData that uses forEach to iterate over the hourlySales array and create an object for each hour. Return an array of the formatted data.
------------------------------------------------------------------------------------------------ */
function salesData(hours, data) {
  let res = [];

  data.forEach((ele, idx) => {
    res.push({ sales: `${ele}`, time: `${hours[idx]}` });
  });

  return res;
}

console.log(salesData(hoursOpen, grandTotal(cookieStores)));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6
Write a function named howManyTreats that will return the quantity of treats you need to pick up from the pet store today from this array.
------------------------------------------------------------------------------------------------ */
const errands = [
  {
    store: "Grocery store",
    items: [
      { name: "Eggs", quantity: 12 },
      { name: "Milk", quantity: 1 },
      { name: "Apples", quantity: 3 },
    ],
  },
  {
    store: "Drug store",
    items: [
      { name: "Toothpaste", quantity: 1 },
      { name: "Toothbrush", quantity: 3 },
      { name: "Mouthwash", quantity: 1 },
    ],
  },
  {
    store: "Pet store",
    items: [
      { name: "Cans of food", quantity: 8 },
      { name: "Treats", quantity: 24 },
      { name: "Leash", quantity: 1 },
    ],
  },
];
function howManyTreats(arr) {
  for (obj of arr) {
    if (obj.store === "Pet store") {
      for (obj2 of obj.items) {
        if (obj2.name === "Treats") {
          return obj2.quantity;
        }
      }
    }
  }
}

console.log(howManyTreats(errands));
//accessing array/objects tech
function howManyTreats2(arr) {
  return arr[2].items[1].quantity;
}

console.log(howManyTreats2(errands));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal
Write a function named battleship that accepts a 2D array and two numbers: a row coordinate and a column coordinate.
Return "hit" or "miss" depending on if there's part of a boat at that position in the array. Assume the array has only one of two values at each index. '#' for part of a boat, or ' ' for open water.
Here is a sample board:
[
  ['#', ' ', '#', ' '],
  ['#', ' ', '#', ' '],
  ['#', ' ', ' ', ' '],
  [' ', ' ', '#', '#'],
]
The top row of the board is considered row zero and row numbers increase as they go down.
------------------------------------------------------------------------------------------------ */
let mat3 = [
  ["#", " ", "#", " "],
  ["#", " ", "#", " "],
  ["#", " ", " ", " "],
  [" ", " ", "#", "#"],
];

function battleship(matrix, row, col) {
  let i = row;
  let j = col;
  if (matrix[i][j] === "#") {
    return "hit";
  } else {
    return "miss";
  }
}

console.log(battleship(mat3, 0, 0));
console.log(battleship(mat3, 1, 0));
console.log(battleship(mat3, 0, 1));
console.log(battleship(mat3, 3, 0));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal
Write a function named calculateProduct that takes in a two-dimensional array of numbers, multiplies all of the numbers in each array, and returns the final product. This function should work for any number of inner arrays.
For example, the following input returns a product of 720: [[1,2], [3,4], [5,6]]
------------------------------------------------------------------------------------------------ */
let mat4 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let mat5 = [
  [2, 3, 4, 6, 0],
  [4, 3, 7],
  [2, 4, 6],
];
const calculateProduct = (numbers) => {
  let final = 1;
  for (i in numbers) {
    let pro = 1;
    for (j in numbers[i]) {
      pro *= numbers[i][j];
    }
    final *= pro;
  }
  return final;
};
console.log(calculateProduct(mat4));
console.log(calculateProduct(mat5));
console.log(calculateProduct([[1, 2], [], [3, 4, 5]]));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal
Write a function named averageDailyTemperature that accepts a two-dimensional array representing average daily temperatures grouped week-by-week.
Calculate the average daily temperature during that entire period. Your output should be a single number. Write your function so it could accept an array with any number of weeks given to it.
------------------------------------------------------------------------------------------------ */
const weeklyTemperatures = [
  [66, 64, 58, 65, 71, 57, 60],
  [57, 65, 65, 70, 72, 65, 51],
  [55, 54, 60, 53, 59, 57, 61],
  [65, 56, 55, 52, 55, 62, 57],
];

// function averageDailyTemperature(matrix) {
//   let sumOfSums = 0;
//   let total;
//   for (let i in matrix) {
//     total = 0;
//     for (j in matrix[i]) {
//       let sum = 0;
//       for (f = 0; f < matrix.length; f++) {
//         sum = sum + matrix[f][i];
//         console.log("sum", sum);
//       }
//       //   sumcol = sum / matrix.length;
//       //   console.log(sumcol);
//     }
//     // total += sumcol;
//     // console.log(total);
//   }
//   //   return total / 7;
// }
// console.log(averageDailyTemperature(weeklyTemperatures));
/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal
Write a function named lowestWeeklyAverage that accepts a two-dimensional array of daily temperatures grouped week-by-week.
Calculate the average temperature for each week and return the value of the lowest weekly average temperature.
For example, in the data set below, the lowest weekly average is 46, which is the average of the temperatures in week 2. All other weeks have average temperatures that are greater than 46.
------------------------------------------------------------------------------------------------ */

let lowestWeeklyTemperatureData = [
  [33, 64, 58, 65, 71, 57, 60],
  [40, 45, 33, 53, 44, 59, 48],
  [55, 54, 60, 53, 59, 57, 61],
  [65, 56, 55, 52, 55, 62, 57],
];

const lowestWeeklyAverage = (weather) => {
  let avgWeek = [];
  for (i in weather) {
    let sum = 0;
    for (j in weather[i]) {
      sum += weather[i][j];
    }

    sum = sum / weather[i].length;
    avgWeek.push(sum);
  }
  return Math.min(...avgWeek);
};
console.log(lowestWeeklyAverage(lowestWeeklyTemperatureData));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 11 - Stretch Goal
Write a function called excel that accepts a string representing rows and columns in a table.
Rows are seperated by newline "\n" characters. Columns are seperated by commas. For example, '1,1,1\n4,4,4\n9,9,9' represents a 3x3 table.
The function should parse the string as rows and columns and compute the sum of the values for each row. Return an array with the sum of the values in each row.
For example, excel('1,1,1\n4,4,4\n9,9,9') returns [3, 12, 27].
------------------------------------------------------------------------------------------------ */
let testStr = "1,1,1\n4,4,4\n9,9,9";

function excel(str) {
  let arr = str.split("\n");
  console.log(arr);
  return arr.map((ele) => {
    let nestedArr = ele.split(",");
    return nestedArr.reduce((acc, cur) => {
      return +acc + +cur;
    });
  });
}
console.log(excel(testStr)); //[3, 12, 27]
