"use strict";
// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array
const longestConsecutiveString = (strarr, k) => {
  if (k <= 0 || strarr.length === 0 || k > strarr.length) return "";
  let longestString = "";
  for (let i = 0; i <= strarr.length - k; i++) {
    const currentString = strarr.slice(i, i + k).join("");
    if (currentString.length > longestString.length) {
      longestString = currentString;
    }
  }
  return longestString;
};
module.exports = { longestConsecutiveString };
