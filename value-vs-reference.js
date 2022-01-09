/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review
Write a function named getNames that, given an array of people objects, uses map to return an array of names reversed.
For example:
[
{
  name: 'lloyd',
  age: 32,
  shoeSize: 12
},
{
  name: 'jamie',
  age: 21,
  shoeSize: 8
}
]
Returns: ['dyoll', 'eimaj'];
------------------------------------------------------------------------------------------------ */
let test = [
  {
    name: "lloyd",
    age: 32,
    shoeSize: 12,
  },
  {
    name: "jamie",
    age: 21,
    shoeSize: 8,
  },
];

function getNames(arr) {
  return arr.map((ele) => {
    //reverse string ===>string==>aray
    return ele.name.split("").reverse().join("");
  });
}
//withoot using js methods

function getNames2(arr) {
  return arr.map((ele) => {
    return ele.name.split("").reduce((acc, cur) => cur + acc);
  });
}

console.log(getNames2(test));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function that appends ' The end.' to a string, and returns the modified string. The original source string should not be modified.
------------------------------------------------------------------------------------------------ */
const appendTheEnd = (str) => {
  return `${str} The end.`;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function that accepts an array and copies the first element to the end of the array. The change should be reflected in the source array that was passed in to the function. That is, the function should modify the array 'in place'.
Do not use a return statement.
For example:

appendFirstToLast(a);
console.log(a) prints [1, 2, 3, 1]
------------------------------------------------------------------------------------------------ */
const a = [1, 2, 3];

function appendFirstToLast(arr) {
  //add to end of array (push )
  //   arr.push(arr[0]);
  //   return arr;

  arr[arr.length] = arr[0];
}

appendFirstToLast(a);
console.log(a);

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function that accepts an object and an integer as arguments and adds a new property to the object called yearBorn. The value of the yearBorn property should be the integer that was passed in.
The change should be reflected in the source object that was passed in to the function. That is, the function should modify the object 'in place'.
Do not use a return statement.
For example:

addBirthYearProperty(octavia, 1947);
console.log(a) prints { fullName: 'Octavia Estelle Butler', yearBorn: 1947 }
------------------------------------------------------------------------------------------------ */
const octavia = { fullName: "Octavia Estelle Butler" };

function addBirthYearProperty(obj, inte) {
  //add to obj new proparty

  obj.yearBorn = inte;

  //   obj = Object.assign(obj, { yearBorn: inte });
}

addBirthYearProperty(octavia, 1996);
console.log(octavia);

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 - Stretch Goal
Write a function that accepts an array of people objects and adds a new property called isAuthor to each object in the list. Set the value of the new property to true.
The function should modify the object in place. Do not use a return statement.
For example:

------------------------------------------------------------------------------------------------ */
const people = [{ fullName: "Octavia Butler" }, { fullName: "Ray Bradbury" }];
setStatusAsAuthor(people);
console.log(people[1].isAuthor);

function setStatusAsAuthor(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i].isAuthor = true;
  }
}

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal
Write a function that accepts two arrays. Append the values from the second array into the first,
maintaining the ordering.
The function should modify the first array in place. Do not use a return statement.
For example:
const a = [1, 2]; NOTE: If you assign an array to a `const`, you can't re-assign it later, but you can change the values in the array.
const b = [3, 4];
append(a, b);
console.log(a) prints [1, 2, 3, 4]
------------------------------------------------------------------------------------------------ */
//concate//flat ===>new array ===>original not updated
//push===>updated

const aArr = [1, 2];
const bArr = [3, 4];
function append(arr1, arr2) {
  //i cant re assighn array if i used const //i can updated values
  //   arr1[arr1.length] = arr2;
  //   arr1 = arr1.flat();
  arr1.push(...arr2);
  //if i want edit arr2
  //   arr2.unshift(...arr1);
}
append(aArr, bArr);
console.log(aArr);

// If you assign an array to a `const`, you can't re-assign it later, but you can change the values in the array.
