//challenge 1/6 not solved
/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review
Write a function named screenForNames that takes in an array of strings and uses Regex to create a new array of only those strings that match the following rules:
* the name must begin with Mr., Mrs., Ms., Dr. followed by a space
* the name must contain only letter characters (white spaces are ok)
------------------------------------------------------------------------------------------------ */

function screenForNames(arr) {
  let x = ["Mr. ", "Mrs. ", "Ms. ", "Dr. "];
  return arr.filter((ele) => {
    return (
      ele.startsWith("Mr. ") ||
      ele.startsWith("Mrs. ") ||
      ele.startsWith("Ms. ") ||
      ele.startsWith("Dr. ")
    );
  });
}
const names = [
  "Mr. Brown",
  " Ms. Red",
  "Dr. Blue",
  "Mrs.",
  "",
  "Ms. Black",
  "dr. Green",
  "Mrs. Orange",
  "Purple",
  "Mr.  Pink",
];
console.log(screenForNames(names)); //['Mr. Brown', 'Dr. Blue', 'Ms. Black', 'Mrs. Orange']
/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function named toTitleCase that takes in an array of strings and returns an array of strings with the first character in upper case and the rest as is.
For example, ['apple', 'banana', 'MacGyver'] returns ['Apple', 'Banana', 'MacGyver'].
------------------------------------------------------------------------------------------------ */

function toTitleCase(arr) {
  return arr.map((ele) => {
    return ele.charAt(0).toUpperCase() + ele.slice(1, ele.length);
  });
}
console.log(toTitleCase(["apple", "banana", "MacGyver"]));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function named biggerThanLuke that, given the Star Wars data, below, returns the names of the characters whose mass is greater than Luke's.
The names should be combined into a single string with each character name separated by a dash.
For example, "Lando Calrisian - Boba Fett - Princess Amidala".
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
  {
    name: "Pex Kylar",
    height: "180",
    mass: "190",
    hair_color: "orange",
    skin_color: "brown",
    eye_color: "none",
    birth_year: "27BBY",
    gender: "n/a",
  },
];

function biggerThanLuke(arr) {
  return arr
    .filter((ele) => {
      return +ele.mass > 77;
    })
    .map((ele) => {
      return ele.name;
    })
    .join(" - ");
}
console.log(biggerThanLuke(starWarsData));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named sortBy that takes in an array of objects, each of which has a particular property, and sorts those objects by that property, lowest to highest, returning the same array.
Here is an example of the input:
[
  {name: 'Sweatshirt', price: 45},
  {name: 'Bookmark', price: 2.50},
  {name: 'Tote bag', price: 15}
];
This data could be sorted by name or price.
------------------------------------------------------------------------------------------------ */
function sortBy(proparty, arr) {
  return arr.sort((a, b) => {
    return a[proparty] < b[proparty] ? -1 : 1;
  });
}
console.log(
  sortBy("price", [
    { name: "Sweatshirt", price: 45 },
    { name: "Bookmark", price: 2.5 },
    { name: "Tote bag", price: 15 },
  ])
);
console.log(
  sortBy("name", [
    { name: "Sweatshirt", price: 45 },
    { name: "Bookmark", price: 2.5 },
    { name: "Tote bag", price: 15 },
  ])
);

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 
Write a function that determines if a given URL is secure, beginning with https://
Guard against malformed URLs, such as: https:missing-slashes.bad
For example:
http://www.insecure.com returns false because the URL is not secure
https://secure.com returns true because the URL is secure
https:/missingslash.org returns false because the URL is malformed
------------------------------------------------------------------------------------------------ */
function isSecure(str) {
  return str.startsWith("https://") ? true : false;
}

console.log(isSecure("http://www.insecure.com"));
console.log(isSecure("https://secure.com"));
console.log(isSecure("https:/missingslash.org"));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 
Write a function named detectTicTacToeWin that accepts a two-dimensional array of strings. Each string is guaranteed to be either "X", "O" or an empty string. Your function should check to see if any row, column, or either diagonal direction has three matching "X" or "O" symbols (non-empty strings), three-in-a-line.
This function should return either true or false to indicate if someone won the game.
Instead of trying to write crazy for loops to automate checking the rows, columns and diagonals consider writing one helper function that accepts three coordinate pairs and checks the values of the array at those locations. For instance helpCheck(row1, col1, row2, col2, row3, col3).
Your function does not need to work for boards of any size other than 3x3.
Here is a sample board:
[
  ['X', '', 'O'],
  ['X', 'O', ''],
  ['X', 'O', 'X'],
];
------------------------------------------------------------------------------------------------ */
