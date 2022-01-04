//higher order functions ===>array method
//arr.reduce(function(acc,cur,idx.arr){},initialValue)

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review
Write a function that iterates over an array of people objects
and creates a new list of each person's full name using the array method 'map'.
Each object will have the shape {firstName:string, lastName:string}
E.g. [ { firstName:"Jane", lastName:"Doe" }, { firstName:"James", lastName:"Bond"}]
should convert to ["Jane Doe", "James Bond"]
Note the space in between first and last names.
You can assume that neither firstName nor lastName will be blank
------------------------------------------------------------------------------------------------ */
function fullName(arr) {
  return arr.map((ele) => {
    return ele.firstName + " " + ele.lastName;
  });
}

console.log(
  fullName([
    { firstName: "Jane", lastName: "Doe" },
    { firstName: "James", lastName: "Bond" },
  ])
);

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function named addValues that, given an array of numbers as input, uses reduce to add the values in the array.//sum of values
------------------------------------------------------------------------------------------------ */
let test1 = [1, 2, 3, 4, -5];

function addValues(arr) {
  return arr.reduce((acc, cur) => {
    return acc + cur;
  });
}

console.log(addValues(test1)); //5

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function named addPurchases that, given an array of objects as input, uses reduce to find the total amount purchased. Each object contains the keys `item` and `purchasePrice` like the example.
{
  item: 'switch'
  purchasePrice: 399
}
------------------------------------------------------------------------------------------------ */
let test2 = [
  {
    item: "switch",
    purchasePrice: 399,
  },
  {
    item: "switch",
    purchasePrice: 399,
  },
];

function addPurchases(arr) {
  return arr.reduce((acc, cur, idx) => {
    // console.log(acc);
    // console.log(cur);
    // console.log(idx);
    return acc + cur.purchasePrice;
  }, 0);
}
console.log(addPurchases(test2));
console.log(
  addPurchases([
    { item: "switch", purchasePrice: 399 },
    { item: "toothpaste", purchasePrice: 2 },
  ])
);
console.log(addPurchases([]));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named countNumberOfElements that, given an array as input, uses reduce to count the number of elements in the array.
Note: You may not use the array's built-in length property.
------------------------------------------------------------------------------------------------ */
let test3 = [1, 2, 3, "dunia"];

function countNumberOfElements(arr) {
  return arr.reduce((acc, cur) => {
    return acc + 1;
  }, 0);
}

console.log(countNumberOfElements(test3));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5
Write a function named returnNames that, given the Star Wars data, below, uses reduce to return an array containing the names of the characters.
------------------------------------------------------------------------------------------------ */

let starWarsData = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
];
let testing = ["dunia", "alkilany", "hello"];
let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

function returnNames(arr) {
  let myArr = arr
    .reduce((acc, cur) => {
      return acc + "|" + cur.name;
    }, "")
    .split("|");
  myArr.shift();
  return myArr;
}
console.log(returnNames(starWarsData));
//another way

function returnNames2(arr) {
  let newArr = [];
  return arr.reduce((acc, cur) => {
    acc = cur.name;
    newArr.push(acc);
    return newArr;
  }, []);
}

console.log(returnNames2(starWarsData));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6
Write a function named reversedString that takes in a string and returns a string with the letters in reverse order.
Note: You must use reduce for this challenge. You may not use the built-in .reverse() string method.
------------------------------------------------------------------------------------------------ */
let testingStr = "dunia";
function reversedString(str) {
  return str.split("").reduce((acc, cur) => {
    return cur + acc; //ainud
  });
}
console.log(reversedString(testingStr));
