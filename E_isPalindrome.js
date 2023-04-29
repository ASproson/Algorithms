"use strict";
// Write a function isPalindrome that takes in a string and returns a boolean indicating whether the string is a palindrome (a word or phrase that is spelled the same forwards and backwards). The function should be case-insensitive and should ignore punctuation and spaces

const isPalindrome = (str) => {
  str = str.replace(/[^a-z]/gi, "").toLowerCase();
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};
module.exports = { isPalindrome };

// Time: O(n) as we have to traverse the entire array
// Space: O(1) as check everything in place
const isPalindromeAlt = (str) => {
  str = str.replace(/[^a-z]/gi, "").toLowerCase();
  return str.split("").every((char, i) => char === str[str.length - i - 1]);
};

// Same Space/Time
