/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review
Write a function called sortStarWarsCharacters that sorts the characters in the starWarsPeople array by height from tallest to shortest.
------------------------------------------------------------------------------------------------ */

let starWarsPeople = [
  {
    name: "C-3PO",
    height: "167",
    eye_color: "yellow",
  },
  {
    name: "Luke Skywalker",
    height: "172",
    eye_color: "blue",
  },
  {
    name: "R2-D2",
    height: "96",
    eye_color: "red",
  },
];

const sortStarWarsCharacters = (arr) => {
  //sort //array method
  return arr.sort((a, b) => {
    if (+b.height < +a.height) {
      return -1;
    } else if (+b.height > +a.height) {
      return 1;
    } else {
      return 0;
    }
  });
};

const sortStarWarsCharacters2 = (arr) => {
  //sort //array method
  return arr.sort((a, b) => {
    //can use without unary plus because
    return b.height - a.height;
  });
};

console.log(sortStarWarsCharacters2(starWarsPeople));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function named removeThree that takes an index and an array. The function should removes three items in the array starting with the value at the index. 
------------------------------------------------------------------------------------------------ */
//splice return array of what i removed and updated original

const removeThree = (idx, arr) => {
  //remove from array //splice
  arr.splice(idx, 3);
  return arr;
};

console.log(removeThree(2, [1, 2, 3, 4, 5, 6, 7, 8])); //[1,2,6,7,8]

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function named joinArray that takes an array and joins all of the elements together in one string on a space.
------------------------------------------------------------------------------------------------ */
function joinArray(arr) {
  //from array to string ===>join===>not updated the array===>return string
  return arr.join(" ");
}
console.log(joinArray(["hello", "301", "students"])); //hello 301 students

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named howMuchPencil that takes in a string, as written on the side of a pencil.
As you sharpen the pencil, the string will become shorter and shorter, starting by removing the first letter.
Your function should use slice within a loop and return an array of each successive string result from losing letters to the sharpener, until nothing is left.
For example, if the input is 'Welcome', the output will be:
['Welcome', 'elcome', 'lcome', 'come', 'ome', 'me', 'e', ''].
------------------------------------------------------------------------------------------------ */
function howMuchPencil(str) {
  let myArr = [];
  for (i = 0; i <= str.length; i++) {
    myArr.push(str.slice(i));
  }
  return myArr;
}
console.log(howMuchPencil("Welcome"));
/* ------------------------------------------------------------------------------------------------
CHALLENGE 5
Write a function name wordsToCharList that, given a string as input, returns a new array where every element is a character of the input string.
For example, wordsToCharList('gregor') returns ['g','r','e','g','o','r'].
------------------------------------------------------------------------------------------------ */
function wordsToCharList(str) {
  //str==>array
  return str.split("");
}

console.log(wordsToCharList("dunia"));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6
You are making a grocery list for ingredients needed in the gruffalo crumble recipe, below. Rather than taking the entire recipe, you only want a list of the item names.
Write a function named listFoods that takes in the recipe and returns a new array of the food items without any amount or units. Just the name. For example, '1 cup flour' will return 'flour'.
Use slice for this function, maybe more than once. The Array.indexOf() method may also be helpful.
Do not use split for this function.
------------------------------------------------------------------------------------------------ */

const gruffaloCrumble = {
  name: "How to make a Gruffalo Crumble",
  ingredients: [
    "1 medium-sized Gruffalo",
    "8 pounds oats",
    "2 pounds brown sugar",
    "4 pounds flour",
    "2 gallons pure maple syrup",
    "16 cups chopped nuts",
    "1 pound baking soda",
    "1 pound baking powder",
    "1 pound cinnamon",
    "6 gallons melted butter",
    "2 gallons fresh water",
  ],
  steps: [
    "Pre-heat a large oven to 375",
    "De-prickle the gruffalo",
    "Sprinkle with cinnamon, sugar, flour, and nuts",
    "Mix until evenly distributed",
    "Grease a 3-foot x 3-foot casserole dish",
    "Combine gruffalo compote with water to maintain moisture in the oven",
    "Fold together remaining ingredients to make the crisp",
    "Spread the crisp evenly over the gruffalo mixture",
    "Bake for 12-15 hours",
  ],
};

const listFoods = (obj) => {
  let res = [];
  for (let i = 0; i < obj.ingredients.length; i++) {
    //slice(start,end)===>not include the end
    //indexOF(value,start[opt])
    res.push(obj.ingredients[i].slice(obj.ingredients[i].indexOf(" ", 3) + 1));
  }
  return res;
};
console.log(listFoods(gruffaloCrumble));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal
Write a function named splitFoods that uses split to produce the same output as Challenge 3.
You may also use other string or array methods.
(["hello", "301", "students"])); //hello 301 students
------------------------------------------------------------------------------------------------ */
function splitFoods(obj) {
  let str = "";
  for (let i = 0; i < obj.ingredients.length; i++) {
    str =
      str +
      obj.ingredients[i].substring(obj.ingredients[i].indexOf(" ", 3) + 1) +
      "|";
    console.log(str);
  }
  let strArr = str.split("|");
  //   strArr.length = strArr.length - 1;
  strArr.splice(strArr.length - 1, 1);
  return strArr;
  //   return str;
}

console.log(splitFoods(gruffaloCrumble));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal
Use the same recipe from Challenge 3, above.
Write a function named stepAction that takes in the recipe and extracts the action verbs from the steps. Fortunate for you, the action verbs are the first word of each action.
Return a new array containing just the verbs. For example, ['Mix until evenly distributed'] returns ['Mix'].
------------------------------------------------------------------------------------------------ */
function stepAction(obj) {
  let arrStps = [];
  for (i = 0; i < obj.steps.length; i++) {
    arrStps.push(obj.steps[i].slice(0, obj.steps[i].indexOf(" ")));
  }
  return arrStps;
}
console.log(stepAction(gruffaloCrumble));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal
Write a function named removeEvenValues that, given an array of integers as input, deletes all even values from the array, leaving no 'gaps' behind.
The array should be modified in-place.
For example:
  const integers = [1, 2, 3, 4, 5, 6];
  removeEvenValues(integers);
  console.log(integers) will print [1, 3, 5]
------------------------------------------------------------------------------------------------ */
//splice ===>deleted===>updated original

const removeEvenValues = (arr) => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr.splice(arr.indexOf(arr[i]), 1);
      i--;
    }
  }
};
let list = [1, 10, 2, 3, 4, 5, 2, 6, 7, 1, 8];
removeEvenValues(list); //[1,3,5,7,1]
console.log(list);

testArray = [6, 3, 19, 43, 12, 66, 43];
removeEvenValues(testArray);
console.log(testArray); //[3, 19, 43, 43]
console.log(testArray.length);

/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal
Write a function named removeLastCharacters that takes in a string and a number. The numberOfCharacters argument determines how many characters will be removed from the end of the string. Return the resulting string.
If the numberOfCharacters argument is greater than the length of the input string, the function should return an empty string.
If the numberOfCharacters argument input is a negative number, the function should return the input string without any changes.
For example:
removeLastCharacters('Gregor', 2) returns 'Greg'
removeLastCharacters('Gregor', -2) returns 'Gregor'
removeLastCharacters('Gregor', 9) returns ''
------------------------------------------------------------------------------------------------ */
function removeLastCharacters(str, num) {
  if (num > str.length) {
    return " ";
  } else if (num < 0) {
    return str;
  } else {
    let strArr = str.split("");
    console.log(strArr);
    for (let i = 0; i < num; i++) {
      strArr.pop();
    }
    return strArr.join("");
  }
}

console.log(removeLastCharacters("Gregor", 2));
console.log(removeLastCharacters("Gregor", -2));
console.log(removeLastCharacters("Gregor", 9));
console.log(removeLastCharacters("a", 1));
/* ------------------------------------------------------------------------------------------------
CHALLENGE 11 - Stretch Goal
Write a function named totalSumCSV that, given a string of comma-separated values (CSV) as input. (e.g. "1,2,3"), returns the total sum of the numeric values (e.g. 6).
------------------------------------------------------------------------------------------------ */
function totalSumCSV(str) {
  let total = 0;
  let stAr = str.split(",");
  console.log(stAr);
  for (i = 0; i < stAr.length; i++) {
    total += +stAr[i];
  }
  return total;
}
console.log(totalSumCSV("1,2,3"));
console.log(totalSumCSV("1,4,5,7,2"));
console.log(totalSumCSV("147"));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 12 - Stretch Goal
Write a function named removeVowels that takes in a string and returns a new string where all the vowels of the original string have been removed.
For example, removeVowels('gregor') returns 'grgr'.
------------------------------------------------------------------------------------------------ */
function removeVowels(str) {
  let vio = ["a", "e", "o", "i", "u"];
  let stA = str.split("");
  for (i = 0; i < stA.length; i++) {
    for (j = 0; j < vio.length; j++) {
      if (stA[i] === vio[j]) {
        stA.splice(stA.indexOf(stA[i]), 1);

        i--;
      }
    }
  }
  return stA.join("");
}

console.log(removeVowels("gregor"));

console.log(removeVowels("asdf"));
console.log(removeVowels("why"));
/* ------------------------------------------------------------------------------------------------
CHALLENGE 13 - Stretch Goal
Write a function named extractVowels that takes in a string and returns an array where the first element is the original string with all the vowels removed, and the second element is a string of all the vowels that were removed, in alphabetical order.
For example, extractVowels('gregor') returns ['grgr', 'eo'].
Similarly, extractVowels('The quick brown fox') returns ['Th qck brwn fx', 'eioou']
------------------------------------------------------------------------------------------------ */

function extractVowels(str) {
  let vio = ["a", "e", "o", "i", "u"];
  let stA = str.split("");
  let rem = [];
  for (let i = 0; i < stA.length; i++) {
    for (let j = 0; j < vio.length; j++) {
      if (stA[i] === vio[j]) {
        // rem = rem.concat(stA.splice(stA.indexOf(stA[i]), 1));
        rem.push(...stA.splice(stA.indexOf(stA[i]), 1));
        i--;
      }
    }
  }

  return Array.of(stA.join(""), rem.sort().join(""));
}

console.log(extractVowels("gregor"));
console.log(extractVowels("The quick brown fox")); // ['Th qck brwn fx', 'eioou']
