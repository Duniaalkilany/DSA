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
