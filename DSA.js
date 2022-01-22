//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

let nums = [7, 11, 13, 2];
let tar = 9;

function sum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i);
      let sum = arr[i];
      console.log(sum);
      console.log(arr[j]);
      //   console.log((sum += arr[j]));
      sum += arr[j];
      if (sum === target) {
        return [i, j];
      } else {
        console.log("failed");
      }
    }
  }
}
console.log(sum(nums, tar));

/*

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

*/

const removeDuplicate = (arr) => {
  //modifying the array
  let n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i) {
      //splice method ===>updated origin array
      arr.splice(i, 1);
      i--;
    }
  }
  console.log(arr);
  let k = arr.length;
  for (let k = arr.length; k < n; k++) {
    arr.push("-");
  }
  console.log(arr);
  return k;
};

console.log(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

/*

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
*/
function addOne(int) {
  //fron nun===>string
  let str = int.toString();
  console.log(str);
  let arr = str.split("");
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  //

  // if (arr.length > 1) {
  //   if (arr[arr.length - 1] < 9) {
  //     arr[arr.length - 1] = arr[arr.length - 1] + 1;
  //   } else {
  //     arr[arr.length - 2] = arr[arr.length - 2] + 1;
  //     arr[arr.length - 1] = 0;
  //   }
  // } else {
  //   if (arr[0] < 9) {
  //     arr[0] = arr[0] + 1;
  //   } else {
  //     arr[0] = 0;
  //     arr.splice(0, 0, 1);
  //   }
  // }
  // return arr;

  if (arr[arr.length - 1] !== 9) {
    arr[arr.length - 1] = arr[arr.length - 1] + 1;
    return arr;
  }

  if (arr.length === 1) {
    arr[arr.length - 1] = 0;
    arr.unshift(1);
  }

  return arr;
}

console.log(addOne(10));

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
    if (i === 0) {
      digits.unshift(1);
      return digits;
    }
  }
};
console.log(plusOne([1, 0]));
