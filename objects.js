/* 7/10 not solved  */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review
Write a function that finds the maximum value in an array
using the 'reduce' method.
E.g. [4,2,7,5,9,2] -> 9
------------------------------------------------------------------------------------------------ */
//use reduce
function maxInArray(arr) {
  return arr.reduce((acc, cur) => {
    return acc > cur ? acc : cur;
  });
}
console.log(maxInArray([4, 2, 7, 5, 9, 2]));

//max/min in array

const maxInArray2 = (arr) => {
  //number methods===>Math object===>max/min
  return Math.max(...arr);
};
console.log(maxInArray2([4, 2, 7, 11, 5, 9, 2]));

//use sort method
//sort updated original //returned sorted array
function macSort(arr) {
  arr.sort((a, b) => {
    return b - a;
  });
  return arr[0];
}

console.log(macSort([4, 2, 100, 7, 5, 9, 2]));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function named getCourseKeys that takes in the courseInfo object and returns an array containing the keys for the courseInfo object.
For example: (['name', 'duration', 'topics', 'finalExam']).
------------------------------------------------------------------------------------------------ */
const courseInfo = {
  name: "Code 301",
  duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
  topics: [
    "SMACSS",
    "APIs",
    "NodeJS",
    "SQL",
    "jQuery",
    "functional programming",
  ],
  finalExam: true,
};

function getCourseKeys(obj) {
  return Object.keys(obj);
}
console.log(getCourseKeys(courseInfo)); //['name', 'duration', 'topics', 'finalExam']

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function named checkValues that takes in an object and a value and returns true if the value is in the object.
------------------------------------------------------------------------------------------------ */

function checkValues(obj, val) {
  valArr = Object.values(obj);
  return valArr.includes(val);
}
console.log(checkValues({ class: "301" }, "301"));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
You are given an object with names and their coresponding phone numbers that looks like this:
{
  'Grace Hopper': '222-303-5938',
  'Ada Lovelace': '222-349-9842',
  'Alan Turing': '222-853-5933'
}
HR has asked you to change the data to make it easier to print so that it looks like this:
[
  'Grace Hopper: 222-303-5938',
  'Ada Lovelace: 222-349-9842',
  'Alan Turing: 222-853-5933'
]
------------------------------------------------------------------------------------------------ */
let obj1 = {
  "Grace Hopper": "222-303-5938",
  "Ada Lovelace": "222-349-9842",
  "Alan Turing": "222-853-5933",
};
//entries===>array of arrays ==>each[key:value]
function updateNumbers(obj) {
  let keyArr = Object.keys(obj);
  let valKey = Object.values(obj);
  let retArr = [];
  for (i = 0; i < keyArr.length; i++) {
    retArr.push(`${keyArr[i]}:${valKey[i]}`);
  }
  return retArr;
}

console.log(updateNumbers(obj1)); // ['Grace Hopper:222-303-5938', 'Ada Lovelace:222-349-9842', 'Alan Turing:222-853-5933']

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5
Write a function named getHouses that returns a new array containing the names of all of the houses in the data set.
------------------------------------------------------------------------------------------------ */
const characters = [
  {
    name: "Eddard",
    spouse: "Catelyn",
    children: ["Robb", "Sansa", "Arya", "Bran", "Rickon"],
    house: "Stark",
  },
  {
    name: "Jon",
    spouse: "Lysa",
    children: ["Robin"],
    house: "Arryn",
  },
  {
    name: "Cersei",
    spouse: "Robert",
    children: ["Joffrey", "Myrcella", "Tommen"],
    house: "Lannister",
  },
  {
    name: "Daenarys",
    spouse: "Khal Drogo",
    children: ["Drogon", "Rhaegal", "Viserion"],
    house: "Targaryen",
  },
  {
    name: "Mace",
    spouse: "Alerie",
    children: ["Margaery", "Loras"],
    house: "Tyrell",
  },
  {
    name: "Sansa",
    spouse: "Tyrion",

    house: "Stark",
  },
  {
    name: "Jon",
    spouse: null,
    house: "Snow",
  },
];

function getHouses(arr) {
  return arr.map((ele) => {
    return ele.house;
  });
}

console.log(getHouses(characters));

/*------------------------------------------------------------------------------------------------
CHALLENGE 6
Write a function named hasChildrenValues that uses Object.values to determine if any given character in the data set has children.
This function should take in an array of data and a character name and return a Boolean.
For example:
hasChildrenValues(characters, 'Cersei') will return true
hasChildrenValues(characters, 'Sansa') will return false
------------------------------------------------------------------------------------------------ */

function hasChildrenValues(arr, str) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].name === str) {
      if (arr[i].children) {
        return true;
      } else {
        return false;
      }
    }
  }
  return "no name like this in arr";
}

// function hasChildrenValues(arr, str) {
//   for (obj of arr) {
//     // console.log(obj);
//     if (Object.values(obj).includes(str)) {
//       return Boolean(obj.children);
//     }
//   }
//   return `name not exisst`;
// }
console.log(hasChildrenValues(characters, "Cersei"));
console.log(hasChildrenValues(characters, "Sansa"));
console.log(hasChildrenValues(characters, "Sanfsa"));
console.log(Boolean(undefined)); //false

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal
Write a function named hasChildrenEntries that is similar to your hasChildrenValues function from challenge 4, but uses the data's entries instead of its values.
The input and output of this function are the same as the input and output from challenge 3.
------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal
Write a function named totalCharacters that takes in an array and returns the number of characters in the array.
------------------------------------------------------------------------------------------------ */
const totalCharacters = (arr) => {
  let num = 0;
  for (obj of arr) {
    console.log(obj);
    myArr = Object.values(obj).flat();

    console.log(myArr);
    num = num + (myArr.length - 1);
    console.log(num);
    myArr.includes(null) ? num-- : num;
    console.log("========================");
  }

  return num;
};

console.log(totalCharacters(characters));
/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal
Write a function named houseSize that takes in the array of characters and creates an object for each house containing the name of the house and the number of members.
All of these objects should be added to an array named "sizes". Return the "sizes" array from the function.
For example: [{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }, ... ].
------------------------------------------------------------------------------------------------ */

function houseSize(arr) {
  let sizes = [];
  for (obj of arr) {
    console.log(obj);
    let newObj = new Object({});
    newObj.house = obj.house;
    console.log(Array.isArray(obj.children));
    if (obj.spouse === null) {
      newObj.members = [obj.name, obj.children].flat().length;
    } else {
      newObj.members = [obj.name, obj.children, obj.spouse].flat().length;
    }
    sizes.push(newObj);
  }
  return sizes;
}
console.log(houseSize(characters));
/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal
As fans are well aware, "When you play the game of thrones, you win or you die. There is no middle ground."
We will assume that Alerie Tyrell is deceased. She missed her daughter's wedding. Twice.
Write a function named houseSurvivors. You may modify your houseSize function from challenge 6 to use as the basis of this function.
This function should create an object for each house containing the name of the house and the number of members. If the spouse is deceased, do not include him/her in the total number of family members.
All of these objects should be added to an array named "survivors". Return the "survivors" array from the function.
For example: [ { house: 'Stark', members: 6 }, { house: 'Arryn', members: 2 }, ... ].
------------------------------------------------------------------------------------------------ */
