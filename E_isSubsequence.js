"use strict";
const isSubsequence = (s, t) => {
  if (s.length > t.length) return false;
  let sPointer = 0;
  let tPointer = 0;
  while (sPointer < s.length && tPointer < t.length) {
    if (s[sPointer] === t[tPointer]) {
      sPointer++;
    }
    tPointer++;
  }
  return sPointer === s.length ? true : false;
};

module.exports = { isSubsequence };
// Time: O(n) as we need to traverse the input strings
// Space: O(1) as no additional data structures, only primitive values
