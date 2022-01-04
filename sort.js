/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review
Write a function named updateAnimal that takes in array of animals (strings) and some callback function.
This function should first create a new array. Then iterate over the input array and modify each value based on the callback function provided.
Push each updated animal string into the new array. Return the new array.
HINT: Look at the tests to see how the callback functions are used.
------------------------------------------------------------------------------------------------ */
let test1 = ["BeAr", "lIon"];

const upper = (element) => {
  return element.toUpperCase();
};

const lower = (element) => {
  return element.toLowerCase();
};

function updateAnimal(arr, callBack) {
  return arr.map((ele) => {
    return callBack(ele);
  });
}

console.log(updateAnimal(test1, upper));
console.log(updateAnimal(test1, lower));

/*
testing for sort 

*/
//sorting strings
let sortTest = ["dunia", "Dunia", "malek", "Malek", "hussam"];
console.log(
  sortTest.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) return 1;
    if (a === b) return 0;
    // if(b<a){return -1}
    // if(b>a){return 1}
    // if(a===b){return 0}
  })
); //["Dunia","Malek","dunia","hussam","malek"]//["malek","hussam","dunia","Malek","Dunia"]

//sorting numbers

let sortTest2 = [10, 20, 70, 100, 5];

console.log(
  sortTest2.sort(function (a, b) {
    return a - b;
  })
); //تصاعدي
console.log(
  sortTest2.sort(function (a, b) {
    return b - a;
  })
); //تنازلي
/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function called sortNames that takes an array of names and sorts them alphabetically. Capital letters should come before lowercase letters.
For example: 'Cat' would come before 'apple'
------------------------------------------------------------------------------------------------ */
//array.sort(Function [Opt])

// let test2=['able', 'Bob']
let test2 = ["apple", "Cat"];
function sortNames(arr) {
  return arr.sort();
}

console.log(sortNames(test2)); //['Bob','able']

let myFriends3 = [
  10,
  "Sayed",
  "Mohamed",
  "marah",
  "90",
  9000,
  100,
  20,
  "10",
  -20,
  -10,
];

myFriends3.sort();
console.log(myFriends3);

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function called sortNumbers that takes an array of numbers and sorts them from smallest to largest.
HINT: Beware... JS default is "Lexical" ordering.
------------------------------------------------------------------------------------------------ */
let test3 = [8, 3, 2, 9, 12, 1, 115];

function sortNumbers(arr) {
  arr.sort((a, b) => {
    return a - b;
  });

  return arr;
}

console.log(sortNumbers(test3)); //[1, 2, 3, 8, 9, 12, 115]

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named sortBackwards that takes in an array of numbers and returns the same array, with the numbers sorted, largest to smallest.
HINT: Do it with a custom sort callback, not with using `.reverse()`. ;)
------------------------------------------------------------------------------------------------ */
const nums = [3, 4, 5, 6, 7];
//method 1
// function sortBackwards(arr) {
//   return arr.sort((a, b) => {
//     return b - a;
//   });
// }

//method2
// function sortBackwards(arr) {
//   return arr.sort((a, b) => {
//     if (b < a) {
//       return -1;
//     }
//     if (b > a) {
//       return 1;
//     }
//     if (b === a) {
//       return 0;
//     }
//   });
// }

//method3//sort==>ascending==>then===>reverse
function sortBackwards(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr.reverse();
}
console.log(sortBackwards(nums));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5
Write a function named alphabetize that takes in an array of strings and returns the same array with the strings sorted alphabetically.
In this alphabetization, capital letters come before lower case letters.
For example, ['Alphabet', 'Zebra', 'alphabet', 'carrot'] is correctly sorted.
------------------------------------------------------------------------------------------------ */
//sorted alphabetically.//capital before small (lowerCase)
let test4 = ["alphabet", "Zebra", "Alphabet", "carrot"];
function sorted(a, b) {
  if (a < b) {
    //a before b //return a-b(negative)
    return -1;
  } else if (a > b) {
    //b before a //return a-b (positive)
    return 1;
  } else {
    //keep order //return a-b=0//a===b
    return 0;
  }
}

function alphabetize(arr) {
  return arr.sort(sorted);
}

console.log(alphabetize(test4)); //['Alphabet', 'Zebra', 'alphabet', 'carrot']

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named sortByPrice that takes in an array of objects, each of which has a 'price' property, and sorts those objects by price, lowest to highest, returning the same array.
Here is an example of the input:

------------------------------------------------------------------------------------------------ */
let test5 = [
  { name: "Sweatshirt", price: 45 },
  { name: "Bookmark", price: 2.5 },
  { name: "Tote bag", price: 15 },
];

function sortByPrice(arr) {
  return arr.sort((a, b) => {
    if (a.price < b.price) {
      return -1;
    } else if (a.price > b.price) {
      return 1;
    } else {
      return 0;
    }
  });
}

function sortByPrice2(arr) {
  return arr.sort((a, b) => {
    return a.price - b.price;
  });
}

console.log(sortByPrice2(test5));
/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal//
Write a function named alphabetizeBetter that takes in an array of strings and returns the same array, with the strings sorted alphabetically. Capitalization should not change the sort order of two strings.
For example, ['Alphabet', 'alphabet', 'carrot', 'Zebra'] is correctly sorted, and so is ['alphabet', 'Alphabet', 'carrot', 'Zebra'].
------------------------------------------------------------------------------------------------ */
//sort===>capital<small

let test6 = ["Alice", "apple", "alert", "Average"];
let test7 = ["alphabet", "Zebra", "Alphabet", "carrot"];
function alphabetizeBetter(arr) {
  return arr.sort((a, b) => {
    if (a.toUpperCase() < b.toUpperCase()) {
      return -1;
    } else if (a.toUpperCase() > b.toUpperCase()) {
      return 1;
    } else {
      return 0;
    }
  });
}

console.log(alphabetizeBetter(test6)); //['alert', 'Alice', 'apple', 'Average'].
console.log(alphabetizeBetter(test7)); //["alphabet","Alphabet","carrot","Zebra"]
console.log(test7.slice(0, 2)); //["alphabet","Alphabet"]

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal
Write a function named sortByLength that takes in an array of strings and returns the same array, with the strings sorted by their length, lowest to highest.
------------------------------------------------------------------------------------------------ */
let test8 = ["alphabet", "Zebra", "Alphabet", "carrot"];
let test9 = ["a", "bc", ""];
function sortByLength(arr) {
  return arr.sort((a, b) => {
    if (a.length < b.length) {
      return -1;
    } else if (a.length > b.length) {
      return 1;
    } else {
      0;
    }
  });
}

console.log(sortByLength(test8)); //["Zebra","carrot","alphabet","Alphabet"]
console.log(test8.slice(0, 2)); //["Zebra","carrot"]
console.log(sortByLength(test9)); //['', 'a', 'bc']

/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal
Write a function named sortNumbersByLength that takes in an array of numbers and sorts those numbers by their length.
For example, [1, 14, 0.2, -281, 54782] is only correctly sorted in that order.
------------------------------------------------------------------------------------------------ */
let test10 = [10, 2.8, 1, -47.75];
let test11 = [100, 2.82, 1, -47.75];
function sortNumbersByLength(arr) {
  arr.sort((a, b) => {
    if (a.toString().length < b.toString().length) {
      return -1;
    } else if (a.toString().length > b.toString().length) {
      return 1;
    } else {
      return 1;
    }
  });
  return arr;
}

console.log(sortNumbersByLength(test10)); //[1, 10, 2.8, -47.75]
console.log(sortNumbersByLength(test11)); //[1, 100, 2.82, -47.75]
console.log(sortNumbersByLength([1, 2, 3])); //[1,2,3]

/*-----------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal
Write a function named sortPeople that takes in an array of Person objects, each of which has firstName, lastName, and age properties, and sorts those people by their last names. Do not worry about capitalization or first names.
------------------------------------------------------------------------------------------------ */
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const people = [
  new Person("Wes", "Washington", 25),
  new Person("Casey", "Codefellow", 38),
  new Person("Stan", "Seattle", 67),
];

const family = [
  new Person("Casey", "Codefellows", 55),
  new Person("Casey", "Codefellows", 37),
  new Person("Charlie", "Codefellows", 21),
  new Person("Charles", "Codefellows", 29),
  new Person("Carol", "Codefellow", 88),
];

function sortPeople(arr) {
  return arr.sort((a, b) => {
    if (a.lastName < b.lastName) {
      return -1;
    } else if (a.lastName > b.lastName) {
      return 1;
    } else {
      return 1;
    }
  });
}

console.log(sortPeople(people));
console.log(sortPeople([{ lastName: "banana" }, { lastName: "apple" }]));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 11 - Stretch Goal
Write a function named sortPeopleBetter that takes in an array of Person objects, each of which has firstName, lastName, and age properties, and sorts those people by their last names.
If two people share the same last name, alphabetize on their first name.
If two people have the same full name, the younger one should come first. Do not worry about capitalization.
------------------------------------------------------------------------------------------------ */
function sortPeopleBetter(arr) {
  return arr.sort((a, b) => {
    if (a.lastName < b.lastName) {
      return -1;
    } else if (a.lastName > b.lastName) {
      return 1;
    } else if (a.lastName === b.lastName) {
      if (a.firstName < b.firstName) {
        return -1;
      } else if (a.firstName > b.firstName) {
        return 1;
      } else {
        return a.age - b.age;
      }
    }
  });
}

console.log(sortPeopleBetter(family));
console.log(
  sortPeopleBetter([
    { firstName: "andrew", lastName: "apple" },
    { firstName: "andre", lastName: "apple" },
  ])
);

/* ------------------------------------------------------------------------------------------------
CHALLENGE 12 - Stretch Goal
Write a function named sortMeetingsByDay that takes in an array of objects, each of which represents a meeting happening a particular day of the week, with a particular start time and end time.
Sort the meetings by the day on which they happen, Monday-Friday. It does not matter which order meetings come in on a particular day. For example, if there are two meetings on Monday, it does not matter which comes first.
------------------------------------------------------------------------------------------------ */
function Meeting(dayOfWeek, start, end) {
  this.dayOfWeek = dayOfWeek;
  this.start = start;
  this.end = end;
}
const meetings = [
  new Meeting("Monday", "0900", "1000"),
  new Meeting("Wednesday", "1300", "1500"),
  new Meeting("Tuesday", "1145", "1315"),
  new Meeting("Wednesday", "0930", "1000"),
  new Meeting("Monday", "0900", "0945"),
  new Meeting("Friday", "1200", "1345"),
];

function sortMeetingsByDay(arr) {
  return arr.sort((a, b) => {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    if (days.indexOf(a.dayOfWeek) < days.indexOf(b.dayOfWeek)) {
      return -1;
    } else if (days.indexOf(a.dayOfWeek) > days.indexOf(b.dayOfWeek)) {
      return 1;
    } else {
      return 0;
    }
  });
}

// const sortMeetingsByDay = (arr) => {
//   return arr.sort((a, b) => {
//     let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
//     //indexOf===>array method array.indexOf(val,from index)===>index(number)
//     return days.indexOf(a.dayOfWeek) - days.indexOf(b.dayOfWeek);
//   });
// };
// console.log(sortMeetingsByDay(meetings));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 13 - Stretch Goal
This challenge should use the array of meetings from challenge 9, above.
Sort the meetings in the order that they start. If two meetings start at the same time on the same day, the shorter meeting should come first.
You DO NOT need to use your solution to Challenge 9 in completing Challenge 10.
------------------------------------------------------------------------------------------------ */

function sortSchedule(arr) {
  return arr.sort((a, b) => {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    if (days.indexOf(a.dayOfWeek) < days.indexOf(b.dayOfWeek)) {
      return -1;
    } else if (days.indexOf(a.dayOfWeek) > days.indexOf(b.dayOfWeek)) {
      return 1;
    } else if (days.indexOf(a.dayOfWeek) === days.indexOf(b.dayOfWeek)) {
      if (a.start < b.start) {
        return -1;
      } else if (a.start > b.start) {
        return 1;
      } else if (a.start === b.start) {
        return a.end - a.start - (b.end - b.start);
      }
    }
  });
}

console.log(sortSchedule(meetings));
