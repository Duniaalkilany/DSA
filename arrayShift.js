/*Write a function called insertShiftArray which takes in an array and the value to be added.
 Without utilizing any of the built-in methods available to your language,
  return an array with the new value added at the middle index.*/

function insertShiftArray2(arr, val) {
  let middle = Math.ceil(arr.length / 2);
  let newArr = [];
  arr.forEach((ele, idx) => {
    if (idx !== middle) {
      newArr.push(ele);
    } else {
      newArr.push(val);
      newArr.push(ele);
    }
  });
  return newArr;
}
console.log(insertShiftArray2([1, 2, 3, 4, 5], "middle"));
//add at specific index

function addToArr(arr, val, index) {
  let newArr = [];
  arr.map((ele, idx) => {
    if (idx !== index) {
      newArr.push(ele);
    } else {
      newArr.push(val);
      newArr.push(ele);
    }
  });
  return newArr;
}
console.log(addToArr([1, 2, 3, 4, 5], 6, 4));
