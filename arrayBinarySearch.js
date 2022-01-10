/*Write a function called BinarySearch which takes in 2 parameters:
 a sorted array and the search key. Without utilizing any of the built-in
  methods available to your language, return the index of the array’s element that is equal to the value of the search key,
 or -1 if the element is not in the array.*/

function BinarySearch(arr, val) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
console.log(BinarySearch([4, 8, 15, 16, 32, 42], 7));
