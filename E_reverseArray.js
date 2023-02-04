"use strict";
// Write a function called reverseArray that takes in an array of integers and returns a new array with the integers in reverse order. The function should use pointers to reverse the array in place, meaning that it should not create a new array to hold the reversed elements
const reverseArray = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let temp;
  while (left < right) {
    temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
};

module.exports = { reverseArray };

// Time: O(n) as we have to interact with the entire array
// Space: O(1) as we reverse the array in place
