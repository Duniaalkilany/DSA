//challenge 10 not solved

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review
Write a function named longestString that takes in an array of strings and returns the index position of the longest string. 
------------------------------------------------------------------------------------------------ */
const strArray1 = ["Ginger", "Goose", "Tangerine", "Rosie", "Mario", "Malaki"];
const strArray2 = [];
const strArray3 = ["Ginger"];

function longestString(arr) {
  let outPut = arr.reduce((acc, cur) => {
    return acc.length > cur.length ? acc : cur;
  }, "");
  return arr.indexOf(outPut);
}
console.log(longestString(strArray1)); //2
console.log(longestString(strArray2)); //-1
console.log(longestString(strArray3)); //0
//another method
function longestString2(arr) {
  let ar1 = [];
  arr.forEach((ele) => {
    ar1.push(ele.length);
  });
  return ar1.indexOf(Math.max(...ar1));
}

console.log(longestString2(strArray1)); //2
console.log(longestString2(strArray2)); //-1
console.log(longestString2(strArray3)); //0
/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function named firstLetters that takes in an array of strings and returns an array containing only the first letter of each string.
For example, ['this is great :)', 'wow', 'whyyyyyy :(', ':)))))'] returns ['t', 'w', 'w', ':']
------------------------------------------------------------------------------------------------ */
const firstLetters = (arr) => {
  return arr.map((ele) => {
    // return ele[0];
    return ele.charAt(0);
  });
};

console.log(firstLetters(["this is great :)", "wow", "whyyyyyy :(", ":)))))"]));
/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function named findHappiness that takes in an array of strings and returns an array containing only the strings from the input array that contain ":)".
For example, ['this is great :)', 'wow', 'whyyyyyy :(', ':)))))'] returns ['this is great :)', ':)))))']
------------------------------------------------------------------------------------------------ */
function findHappiness(arr) {
  return arr.filter((ele) => {
    return ele.includes(":)");
  });
}
console.log(
  findHappiness(["this is great :)", "wow", "whyyyyyy :(", ":)))))"])
);

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named standardizePhoneNumbers that takes in an array of phone number strings in (XXX) XXX-XXXX format and returns an array with the phone number strings in XXXXXXXXXX format.
For example, (123) 456-7890 returns 1234567890
------------------------------------------------------------------------------------------------ */
const standardizePhoneNumbers = function (arr) {
  return arr.map((ele) => {
    let x = ["(", ")", " ", "-"];
    for (i = 0; i < x.length; i++) {
      ele = ele.replace(x[i], "");
      console.log(ele); //string===>replace(,"")===>delete old
    }
    return ele;
  });
};
const nums = ["(123) 456-7890", "(222) 222-2222"];
console.log(standardizePhoneNumbers(nums)); //['1234567890', '2222222222']
console.log(standardizePhoneNumbers([nums[0]]));
/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 
Write a function named onlyOddChars that takes in a string and returns only the odd-index characters from that string.
For example, 'abcdefg' returns 'bdf'
------------------------------------------------------------------------------------------------ */
function onlyOddChars(str) {
  let newStr = "";
  for (i = 0; i < str.length; i++) {
    if (i % 2 !== 0) {
      newStr += str[i];
    }
  }
  return newStr;
}
console.log(onlyOddChars("abcdefg"));
console.log(onlyOddChars(""));

//one line

function onlyOddChars2(str) {
  return str
    .split("")
    .filter((ele, idx) => {
      return idx % 2 !== 0;
    })
    .join("");
}
console.log(onlyOddChars2("abcdefg"));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 
Write a function named allHappy that takes in an array of strings and returns a Boolean indicating whether all those strings contain ":)".
------------------------------------------------------------------------------------------------ */

const allHappy = (arr) => {
  let val = ":)";
  return arr.every(function (ele) {
    return ele.includes(this);
  }, val);
};

let words = [
  "things",
  "apple (:)",
  ":)banana",
  "missing that thing",
  "cant:)aloupe",
];
console.log(allHappy(words));
console.log(allHappy(["apple (:)", ":)banana", "cant:)aloupe"]));
console.log(allHappy([]));

//another method

function allHappy2(arr) {
  let val = ":)";
  for (i = 0; i < arr.length; i++) {
    if (!arr[i].includes(val)) {
      return false;
    }
  }
  return true;
}

console.log(allHappy2(words));
console.log(allHappy2(["apple (:)", ":)banana", "cant:)aloupe"]));
console.log(allHappy2([]));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal
Write a function named findAnything that takes in an array of strings, along with a target string. Return an array containing only those strings from the original array that contain the target string.
------------------------------------------------------------------------------------------------ */
function findAnything(arr, str) {
  return arr.filter((ele) => {
    return ele.includes(str);
  });
}

console.log(findAnything(words, "i"));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal
Write a function named findEvery that takes in an array of strings, along with a target string. Return a Boolean based on whether or not every string in the array contains the target string.
------------------------------------------------------------------------------------------------ */

function findEvery(arr, str) {
  return arr.every(function (ele) {
    return ele.includes(this);
  }, str);
}
words = [
  "things",
  "apple pie (:)",
  ":)banana pie",
  "missing that thing",
  "cant:)aloupe is tasty",
];
console.log(findEvery(words, "a"));
console.log(findEvery(words, ""));
console.log(findEvery(words, "i"));
/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal
We've been testing a new course enrollment system, and we think we have the bugs worked out, but in the meantime, Brook enrolled himself in a bunch of different classes to test if it was working.
Write a function named unenrollBrook that takes in a two-dimensional array, where each array represents one course's roster and is an array of strings of the names of the people in that course.
Return a two-dimensional array with the same roster, but where anyone whose name includes Brook is removed from every course.
For example, [['Brook Testing', 'Actual Person'], ['Human Person', 'Brook again', 'still Brook']] returns [['Actual Person'], ['Human Person']]
------------------------------------------------------------------------------------------------ */

const unenrollBrook = (arr) => {
  let str = "Brook";
  return arr.map((ele) => {
    return ele.filter((ele2) => {
      return !ele2.includes(str);
    });
  });
};

console.log(
  unenrollBrook([
    ["Brook Testing", "Actual Person"],
    ["Human Person", "Brook again", "still Brook"],
  ])
);
const roster = [
  ["Michelle", "Allie", "Brook TESTING"],
  ["Brook Riggio", "hey look it's Brook", "Jennifer"],
  ["Nicholas", "Sam", "Scott", "Vinicio"],
];

console.log(unenrollBrook(roster));
console.log(
  unenrollBrook([["Brook", "person"], [], ["person", "person", "Brook"]])
);

/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal
Write a function named sortByDay that takes in an array of strings, each of which represents an event's day and time.
Return a two-dimensional array that organizes those strings based on the day on which they occur. For example, all events on Monday are in the first array, all events on Tuesday are in the second array, etc.
If an event takes place on multiple days (i.e. "Dancing on Mondays and Tuesdays"), it should appear in both arrays.
For example, ['Tuesday', 'Monday', 'Wednesday and Thursday', 'Tuesday 2', 'Thursday'] returns
[
  ['Monday'],
  ['Tuesday', 'Tuesday 2'],
  ['Wednesday and Thursday'],
  ['Wednesday and Thursday', 'Thursday'],
  [],
  [],
  []
]
------------------------------------------------------------------------------------------------ */

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const events = [
  "Dancing on Mondays and Tuesdays",
  "Meet the inventors! Monday, August 7",
  "in the club on a Tuesday",
  "Thursday Night Code",
  "Saturday Night Fever",
];
const events2 = [
  "Tuesday",
  "Monday",
  "Wednesday and Thursday",
  "Tuesday 2",
  "Thursday",
];
// const sortByDay = (arr) => {
//   arr.sort((a, b) => {
//     return daysOfWeek.indexOf(a) - daysOfWeek.indexOf(b);
//   });
// };
// console.log(sortByDay(events2));
/* ------------------------------------------------------------------------------------------------
CHALLENGE 11 - Stretch Goal
Write a function named characterByIndex that takes in an array of strings and returns an array containing the first character of the first string, the second character of the second string, etc.
For example, ['abcd', 'efgh', 'ijkl', 'mnop'] returns ['a', 'f', 'k', 'p']
------------------------------------------------------------------------------------------------ */

const characterByIndex = (arr) => {
  return arr.map((ele, idx) => {
    return ele[idx];
  });
};

console.log(characterByIndex(["abcd", "efgh", "ijkl", "mnop"]));
