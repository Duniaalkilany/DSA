/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review
Write a function named transformToLis that, given an object, returns an array of the key value pairs as html list items.
For example: 
{
  name: 'bob',
  age: 32
}
Becomes: 
[
<li>name: bob</li>,
<li>age: 32</li>
]
------------------------------------------------------------------------------------------------ */

let obj1 = {
  name: "bob",
  age: 32,
};

function transformToLis(obj) {
  return Object.keys(obj).map((ele) => `<li>${ele}: ${obj[ele]}</li>`);
}

console.log(transformToLis(obj1));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function named count that, given an integer and an array of arrays, uses either filter, map, or reduce to count the amount of times the integer is present in the array of arrays.
Note: You might need to use the same method more than once.
For example, count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]) returns 4.
------------------------------------------------------------------------------------------------ */
function count(int, arr) {
  let myArr = [];
  arr.map((ele) => {
    ele.map((ele2) => {
      if (ele2 === int) {
        myArr.push(ele2);
      }
    });
  });
  return myArr.length;
}
console.log(
  count(5, [
    [1, 3, 5, 7, 9],
    [5, 5, 5],
    [1, 2, 3],
  ])
);
/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function that, given an array of integer arrays as input, calculates the total sum of all the elements in the array.
You may want to use filter, map, or reduce for this problem, but are not required to. You may need to use the same method more than once.
For example, [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]] returns 66.
------------------------------------------------------------------------------------------------ */
// function totalSum(arr) {
//   let myArr = arr.map((ele) => {
//     return ele.reduce((acc, cur) => {
//       return acc + cur;
//     });
//   });
//   return myArr.reduce((acc, cur) => {
//     return acc + cur;
//   });
// }

function totalSum(arr) {
  return arr
    .map((ele) => {
      return ele.reduce((acc, cur) => {
        return acc + cur;
      });
    })
    .reduce((acc, cur) => {
      return acc + cur;
    });
}
console.log(
  "sum",
  totalSum([
    [1, 2, 3, 4, 5],
    [6, 7, 2, 4, 5, 7],
    [9, 2, 3, 6],
  ])
);

function totalSum2(arr) {
  let sum = 0;
  arr.map((ele) => {
    ele.map((ele2) => {
      sum += ele2;
    });
  });
  return sum;
}
console.log(
  totalSum2([
    [1, 2, 3, 4, 5],
    [6, 7, 2, 4, 5, 7],
    [9, 2, 3, 6],
  ])
);
/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named divisibleByFiveTwoToThePower that accepts an array of arrays as input.
This function should first remove any elements that are not numbers or are not divisible by five.
This function should then raise 2 to the power of the resulting numbers, returning an array of arrays.
For example, [ [0,2,5,4], [2,4,10], [] ] should return [ [1, 32], [1024], [] ].
------------------------------------------------------------------------------------------------ */
function divisibleByFiveTwoToThePower(arr) {
  return arr.map((ele) => {
    return ele
      .filter((ele2) => {
        return typeof ele2 === "number" && ele2 % 5 === 0;
      })
      .map((ele) => {
        return Math.pow(2, ele);
      });
  });
}
console.log(
  divisibleByFiveTwoToThePower([
    [10, 20, 5, 4],
    [5, 6, 7, 9],
    [1, 10, 3],
  ])
); //[[1024, 1048576, 32], [32], [1024]]
console.log(
  divisibleByFiveTwoToThePower([
    [1, 2, 3],
    [5, 10, 15],
  ])
);
console.log(
  divisibleByFiveTwoToThePower([["one", "two", "five"], ["5", "10", "15"], [5]])
);
/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 
Write a function named findMaleAndFemale that, given the Star Wars data, below,
returns the names of the characters whose gender is either male or female.
The names should be combined into a single string with each character name separated by "and".
For example, "C-3PO and Luke Skywalker".
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
function findMaleAndFemale(arr) {
  let names = [];
  arr.map((ele) => {
    if (ele.gender === "male" || ele.gender === "female") {
      names.push(ele.name);
    }
  });
  return names.join(" and ");
}

console.log(findMaleAndFemale(starWarsData));

//use another methods

function findMaleAndFemale2(arr) {
  return arr
    .filter((ele) => {
      return ele.gender === "male" || ele.gender === "female";
    })
    .map((ele) => {
      return ele.name;
    })
    .join(" and ");
}

console.log(findMaleAndFemale2(starWarsData));
console.log(
  findMaleAndFemale2([
    { name: "person", gender: "female" },
    { gender: "lol" },
    { name: "persontwo", gender: "male" },
  ])
);

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 
Write a function named findShortest that, given the Star Wars data from Challenge 6, uses any combination of filter, map and reduce to return the name of the shortest character.
------------------------------------------------------------------------------------------------ */

function findShortest(arr) {
  return arr.reduce((acc, cur) => {
    return +acc.height < Number(cur.height) ? acc : cur;
  }).name;
}
console.log(findShortest(starWarsData));
