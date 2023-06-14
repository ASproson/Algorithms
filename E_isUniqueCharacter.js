"use strict";
// Write a function uniqueCharacters that takes in a string and returns a boolean indicating whether the string contains all unique characters. The function should be case-insensitive

const isUniqueCharacter = (str) => {
  str = str.toLowerCase();
  const charSet = {};
  for (let i = 0; i < str.length; i++) {
    if (charSet[str[i]]) {
      return false;
    }
    charSet[str[i]] = true;
  }
  return true;
};

// Time: O(n) as it must interact with every element in the array
// Space: O(n) and is proportional to input string
module.exports = { isUniqueCharacter };
const isUniqueCharacterAlt = (str) => {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) return false;
  }
  return true;
};

// Time: O(n^2) due to use of indexOf and lastIndexOf, which both have O(n), and are called in a loop in O(n), therefore O(n*n) === O(n^2)
// Space O(1)
