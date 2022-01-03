/* ------------------------------------------------------------------------------------------------
CHALLENGE 1
Write a function named `addOne` that takes an array of numbers, and returns a new array of the numbers, incremented by 1.
Use `forEach` to loop over the input array and work with each value.  Push the new value into a local array. Return the local array;
------------------------------------------------------------------------------------------------ */
/*forEach is higherOrder functions===>take function (callback function as parametr)
- Doesnt Return Anything [Undefined]
- Break Will Not Break The Loop
-
*/
let testArr = [1, 2, 3, 4];
function addOne(arr) {
  let newArr = [];
  arr.forEach((ele, idx, array) => {
    ele = ele + 1;
    newArr.push(ele);
  });
  return newArr;
}
console.log(addOne(testArr)); //[2,3,4,5]

// let newArr=testArr.forEach(function(ele){
// return ele=ele+1

// })

// console.log(newArr);//undefined//forEach on my array //but forEach does not return any thing

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function named `addExclamation` that takes an array of strings, and returns a new array of the same strings with an "!" added to the end.
Use `forEach` to loop over the input array. Modify each string, and add the updated value into a local array. Return the local array;
------------------------------------------------------------------------------------------------ */
let test2 = ["dunia", "abd", "alkilany"];
function addExclamation(arr) {
  let newArr = [];
  arr.forEach((ele) => {
    //     ele+="!"//concatenation
    //   newArr.push(ele)
    newArr.push(`${ele}!`); //tamplete literal//ES6
  });
  return newArr;
}

console.log(addExclamation(test2)); //["dunia!","abd!","alkilany!"]

//i can do the previouse using(map/for)

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function named `allUpperCase` that takes an array of strings, and returns a new array of the strings converted to upper case.
Use `forEach` to loop over the input array. The modified strings should each be added into a local array. Return that local array.
------------------------------------------------------------------------------------------------ */

function allUpperCase(arr) {
  let newArr = [];
  arr.forEach((ele) => {
    //        ele= ele.toUpperCase()//string method
    // newArr.push(ele)
    newArr.push(ele.toUpperCase());
  });
  return newArr;
}

console.log(allUpperCase(test2)); //["DUNIA","ABD","ALKILANY"]

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named `greeting` that takes in a single string and returns the string in all uppercase letters, and followed by an "!".
Then, write a function named `speaker` that takes in an array of strings and a callback function. 
Use `forEach` to build a new array of strings, each string modified by the callback. Return the new array. 
------------------------------------------------------------------------------------------------ */
let myStr = "duniaalkilany";
function greeting(str) {
  return `${str.toUpperCase()}!`;
}

console.log(greeting(myStr));

function speaker(arr, callBack) {
  let newArr = [];
  arr.forEach((ele) => {
    ele = callBack(ele);
    newArr.push(ele);
  });

  return newArr;
}

console.log(speaker(test2, greeting)); //["DUNIA!","ABD!","ALKILANY!"]

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5
Write a function named addValues that takes in an array and a value and pushes the value into the array. This function does not need a return statement.
Then, write a function named addNumbers that takes in four arguments:
  - A number to be added to an array
  - An array into which the number should be added
  - The number of times the number should be added
  - A callback function to use to add the numbers to the array (Hint: you already defined it)
Within the addNumbers function, invoke the callback function as many times as necessary, based on the third argument of the addNumbers function.
Return the modified array.
------------------------------------------------------------------------------------------------ */

function addValues(arr, val) {
  arr.push(val);
  console.log(arr);
}

// addValues(test2,"hello");//["dunia","abd","alkilany","hello"]

function addNumbers(arr, num, times, callBack) {
  let newArr = [];
  arr.forEach((ele, idx) => {
    newArr[idx] = ele;
  });
  for (let i = 0; i <= times; i++) {
    callBack(newArr, num);
  }
  return newArr;
}

console.log(addNumbers(test2, 2, 4, addValues));
/* ------------------------------------------------------------------------------------------------
CHALLENGE 6
Write a function named createList that takes in an array of the current store intentory.
The inventory is formatted like this:
[
  { name: 'apples', available: true },
  { name: 'pears', available: true },
  { name: 'oranges', available: false },
  { name: 'bananas', available: true },
  { name: 'blueberries', available: false }
]
This function should use forEach to populate your grocery list based on the store's inventory. If the item is available, add it to your list. Return the final list.
------------------------------------------------------------------------------------------------ */
let test3 = [
  { name: "apples", available: true },
  { name: "pears", available: true },
  { name: "oranges", available: false },
  { name: "bananas", available: true },
  { name: "blueberries", available: false },
];
function createList(arr) {
  let finalList = [];
  arr.forEach((ele) => {
    ele.available === true ? finalList.push(ele.name) : "";
  });
  return finalList;
}
console.log(createList(test3)); //['apples', 'pears', 'bananas']

/* ------------------------------------------------------------------------------------------------
STRETCH - CHALLENGE 7
Write a function named fizzbuzz that takes in an array of numbers.
Iterate over the array using forEach to determine the output based on several rules:
  - If a number is divisible by 3, add the word "Fizz" to the output array.
  - If the number is divisible by 5, add the word "Buzz" to the output array.
  - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
  - Otherwise, add the number to the output array.
Return the resulting output array.
------------------------------------------------------------------------------------------------ */
let test4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
function fizzbuzz(arr) {
  let outArr = [];
  arr.forEach((ele, idx) => {
    if (ele % 3 === 0 && ele % 5 === 0) {
      outArr.push("Fizz Buzz");
    } else if (ele % 3 === 0) {
      outArr.push("Fizz");
    } else if (ele % 5 === 0) {
      outArr.push("Buzz");
    } else {
      outArr.push(ele);
    }
  });
  return outArr;
}

console.log(fizzbuzz(test4)); // [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz', 16]

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review
Write a function named raisedToTheThird that takes in an array of numbers and returns a new array of each of those numbers raised to the 3rd power (hint: look up Math.pow()). Use forEach to solve this problem.
------------------------------------------------------------------------------------------------ */
//Math obj===>Math.pow(,)

let test5 = [1, 2, 3, 4, 5];
function raisedToTheThird(arr) {
  let newArr = [];
  arr.forEach((ele) => {
    newArr.push(Math.pow(ele, 3));
  });
  return newArr;
}

console.log(raisedToTheThird(test5)); //[1,8,27,64,125]

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function named addOne that, given an array of numbers, uses map to return a new array with each value simply incremented by 1. 
------------------------------------------------------------------------------------------------ */
//main deffirent ===>function return in forEach===>not return any thingself //map i returned new array
let test6 = [1, 2, 3, 4, 5];
function addOne2(arr) {
  let newArr = [];
  arr.map((ele) => {
    newArr.push(ele + 1);
  });
  return newArr;
}
console.log(addOne2(test6));

let newArr = test6.map((ele) => {
  return ele + 1;
});
console.log(newArr);

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function named addQuestion that, given an array of strings, uses map to return a new array containing each string followed by a question mark character.
------------------------------------------------------------------------------------------------ */
let test7 = ["d", "u", "n", "i", "a"];
function addQuestion(arr) {
  newArr = arr.map(function (ele) {
    return `${ele}?`;
  });
  return newArr;
}

console.log(addQuestion(test7)); //['d?', 'u?', 'n?', 'i?', 'a?']

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named forLoopTwoToThe that, given an array of integers as input, iterates over the array and returns a new array. The returned array should contain the result of raising 2 to the power of the original input element.
You may choose to complete this challenge using a for loop, for...in syntax, or for...of syntax.
For example, twoToThe([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.
------------------------------------------------------------------------------------------------ */
let test8 = [1, 2, 3];
function forLoopTwoToThe(arr) {
  let newArr = arr.map((ele) => {
    return Math.pow(2, ele);
  });
  return newArr;
}

console.log(forLoopTwoToThe(test8));

//using for //edit the array it self //retuenede updated array

function forLoopTwoToThe2(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.pow(2, arr[i]);
  }
  return arr;
}

// console.log(forLoopTwoToThe2(test8));

//using for //retuen new Array

function forLoopTwoToThe3(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.pow(2, arr[i]));
  }
  return newArr;
}

console.log(forLoopTwoToThe3(test8));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5
Write a function named forEachTwoToThe that produces the same output as your forLoopTwoToThe function from challenge 4, but uses forEach instead of a for loop.
------------------------------------------------------------------------------------------------ */

function forEachTwoToThe(arr) {
  let newArr = [];
  arr.forEach((ele) => {
    newArr.push(Math.pow(2, ele));
  });
  return newArr;
}

console.log(forEachTwoToThe(test8));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6
Write a function named mapTwoToThe that produces the same output as your forLoopTwoToThe function from challenge 4 and your forEachTwoToThe function from challenge 5, but uses map instead of a for loop or forEach.
------------------------------------------------------------------------------------------------ */
function mapTwoToThe(arr) {
  let newArr = arr.map(function (ele) {
    return Math.pow(2, ele);
  });
  return newArr;
}

console.log(mapTwoToThe(test8));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal
Write a function named charCode that, given an array of letters as an input, uses map to return a new array where each element is the result of the `charCodeAt` method on the original array element.
Read the MDN documentation on String.charCodeAt() if necessary.
For example: charCode(['h','i']) returns [104, 105].
------------------------------------------------------------------------------------------------ */
let test9 = ["h", "i"];

function charCode(arr) {
  let newArr = arr.map((ele, idx) => {
    return ele.charCodeAt();
  });
  return newArr;
}

console.log(charCode(test9));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal
Write a function that, given an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.
If any element in the array is not a number, the resulting array should have the string "N/A" in its place.
For example: evenOdd([1,2,3]) returns ['odd','even','odd'].
------------------------------------------------------------------------------------------------ */

//arrow function //
let test10 = [50, 1, 2, 3, "gg"];
const evenOdd = (arr) => {
  let newArr = arr.map((ele) => {
    return typeof ele !== "number" ? "N/A" : ele % 2 === 0 ? "even" : "odd";
  });
  return newArr;
};

console.log(evenOdd(test10));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal
Use the snorlaxAbilities data, below, for this challenge.
Write a function named extractAbilities that, given the array of abilities, uses map to create an array containing only the ability name.
Note: Because this function is expecting the array of abilities, it will be invoked as:
extractAbilities(snorlaxAbilities.abilities)
------------------------------------------------------------------------------------------------ */
const snorlaxStats = {
  stats: [
    {
      stat: {
        url: "https://pokeapi.co/api/v2/stat/6/",
        name: "speed",
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: "https://pokeapi.co/api/v2/stat/5/",
        name: "special-defense",
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: "https://pokeapi.co/api/v2/stat/4/",
        name: "special-attack",
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: "snorlax",
  weight: 4600,
};

const extractStats = (arr) => {
let newArr=arr.map((ele)=>{
//ele===>obj
// return { name:ele.stat.name,total:ele.effort+ele.baseStat}
return new Object({name:ele.stat.name,total:ele.effort+ele.baseStat})
})
return newArr
};

console.log(extractStats(snorlaxStats. stats));

/*output [
      { name: 'speed', total: 35, },
      { name: 'special-defense', total: 112, },
      { name: 'special-attack', total: 74, },
    ]*/

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review
Write a function called addTwo that takes in an array and adds two to every value using a for loop. Place the new value in a new array. Return the new array.
------------------------------------------------------------------------------------------------ */
let test11=[1, 2, 4]

function addTwo(arr){
let newArr=[]
for(let i=0;i<arr.length;i++){
newArr[i]=arr[i]+2
// newArr.push(arr[i]+2)
}
return newArr
}    

console.log(addTwo(test11));//[3, 4, 6]



/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function named typeNum that, given an array as input, uses filter to return an array containing only the numbers.
For example, typeNum([1, 'bob' ,3]) returns [1,3].
------------------------------------------------------------------------------------------------ */
let test12=[1, 'bob' ,3]
const typeNum=(arr)=>{
let newArr=arr.filter(function(ele){
return typeof ele==="number" 
})
return newArr
}

console.log(typeNum(test12));

//write the above in one return 

const typeNum2=(arr)=>{
    return arr.filter(ele=>typeof ele==="number"
     
    )
}

console.log(typeNum2(test12));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function named containsAnd that, given an array of strings as input, uses filter to return an array containing only strings that contain 'and' within the string.
For example, containsAnd(['panda', 'ran', 'and']) returns ['panda', 'and'].
------------------------------------------------------------------------------------------------ */
let test13=['panda', 'ran', 'and']
function containsAnd(arr){
    //--->string method===> includes(Value [Mand], Start [Opt] Default 0(index)) [ES6]
return arr.filter((ele)=>ele.includes("and"))
}

console.log(containsAnd(test13));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named oddValues that, given an array of integers as input, uses filter to return an array containing only the odd integers.
For example, oddValues([1,2,3]) returns [1,3].
------------------------------------------------------------------------------------------------ */


let test14=[1,2,3]
const oddValues=(arr)=>{
return arr.filter((ele)=> ele%2!==0
)
}

console.log(oddValues(test14));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5
Write a function named notInFirstArray that, given two arrays as input, uses filter to return an array of all the elements in the second array that are not included in the first array.
For example, notInFirstArray([1,2,3], [1,2,3,4]) returns [4].
------------------------------------------------------------------------------------------------ */
let firstArr=[1,2,3]
let secArr=[1,2,3,4]
function notInFirstArray(arr1,arr2){
    //  - includes(valueToFind, fromIndex [Opt]) [ES7]===indexOF("")>=07//lastIndexOf
   return arr2.filter((ele)=>{
        return !arr1.includes(ele)
    })
}
console.log(notInFirstArray(firstArr,secArr));

//another method
const notInFirstArray2=(arr1,arr2)=>{
    return arr2.filter((ele)=>!(arr1.indexOf(ele)>=0)
  )

} 

console.log(notInFirstArray2(firstArr,secArr));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal
Write a function named getBaseStatGreaterThan that, given the snorlaxData, below, and an integer as input, uses filter to return an array containing all stats with a baseStat greater than the integer.
For example, getBaseStatGreaterThan(snorlaxData.stats, 50) will return an array containing the 'special-defense' and 'special-attack' objects.
------------------------------------------------------------------------------------------------ */
const snorlaxData = {
  stats: [
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed',
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense',
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack',
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: 'snorlax',
  weight: 4600,
};


function getBaseStatGreaterThan(arr,val){
return arr.filter((ele)=>{
return ele["baseStat"]>val
})
}

console.log(getBaseStatGreaterThan(snorlaxData.stats,50));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal
Write a function named getStatName that is an extension of your getBaseStatGreaterThan function from challenge 7. For this function, extend your solution from challenge 7 to only return the name of the stat, rather than the entire stat object.
For example, getStatName(snorlaxData.stats, 50) will return ['special-defense', 'special-attack'].
------------------------------------------------------------------------------------------------ */

function getStatName(arr,val){
let myArr=getBaseStatGreaterThan(arr,val)
console.log(myArr);
return myArr.map((ele)=>{
    return ele.stat.name
})
}
console.log(getStatName(snorlaxData.stats,50));//['special-defense', 'special-attack']


/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal
Write a function named getCharactersWithoutChildren that, given the array of characters, below, uses filter to return an array of all characters without children.
------------------------------------------------------------------------------------------------ */
//array of objects 
const characters = [
    {
      name: 'Eddard',
      spouse: 'Catelyn',
      children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
      house: 'Stark',
    },
    {
      name: 'Jon',
      spouse: 'Lysa',
      children: ['Robin'],
      house: 'Arryn',
    },
    {
      name: 'Cersei',
      spouse: 'Robert',
      children: ['Joffrey', 'Myrcella', 'Tommen'],
      house: 'Lannister',
    },
    {
      name: 'Daenarys',
      spouse: 'Khal Drogo',
      children: ['Drogon', 'Rhaegal', 'Viserion'],
      house: 'Targaryen',
    },
    {
      name: 'Mace',
      spouse: 'Alerie',
      children: ['Margaery', 'Loras'],
      house: 'Tyrell',
    },
    {
      name: 'Sansa',
      spouse: 'Tyrion',
      house: 'Stark',
    },
    {
      name: 'Jon',
      spouse: null,
      house: 'Snow',
    },
  ];

const getCharactersWithoutChildren=(arr)=>{
//console.log(Boolean(undefined));
// console.log(Boolean(!undefined));
    return arr.filter(ele=>!ele.children
        //ele=>ele.children===undefined
   )

}

console.log(getCharactersWithoutChildren(characters));
/*output [ {
      name: 'Sansa',
      spouse: 'Tyrion',
      house: 'Stark',
    },
    {
      name: 'Jon',
      spouse: null,
      house: 'Snow',
    },]*/



/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal
Write a function named evenOddNumericValues that, given an array as input, uses filter to remove any non-numeric values, then uses map to generate a new array containing the string 'even' or 'odd', depending on the original value.
For example: evenOddNumericValues(['Gregor', 2, 4, 1]) returns ['even', 'even', 'odd'].
------------------------------------------------------------------------------------------------ */
    let test15=['Gregor', 3,'dunia' ,4, 1]

function evenOddNumericValues(arr){
        let myArr=arr.filter((ele)=>{
            return typeof ele==="number"
        })
        return myArr.map((ele)=>ele%2===0?"even":"odd"
        )
    }

    console.log(evenOddNumericValues(test15));//['even', 'even', 'odd']

    