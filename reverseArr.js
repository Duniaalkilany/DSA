//Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.
function reverseArr(arr) {
  let reversed = [];
  for (let i = 1; i <= arr.length; i++) {
    reversed.push(arr[arr.length - i]);
  }
  return reversed;
}

console.log(reverseArr([1, 2, 3, 4, 5]));

function reverseArr2(arr) {
  let initial = 1;
  let reversed = [];
  for (let i = 0; i < arr.length; i++) {
    reversed.push(arr[arr.length - initial]);
    initial++;
  }
  return reversed;
}

console.log(reverseArr2(["dunia", "abd", "alkilany"]));
