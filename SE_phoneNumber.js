"use strict";
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number
// phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) returns "(123) 456-7890"
const phoneNumber = (numbers) => {
  let str = "(";
  str += numbers.slice(0, 3).join("") + ") ";
  str += numbers.slice(3, 6).join("") + "-";
  str += numbers.slice(6, 10).join("");
  return str;
};
module.exports = { phoneNumber };
