"use strict";
const add = (a, b) => {
  return a + b;
};
module.exports = add;
// Space complexity is O(1) as the func only requires a fixed amount of space to store a few primitive values (a, b, and their sum)
// Time complexity is O(1) as the function executes in the same of time regardless of the size of the input, i.e (1000, 10000000) is no different from (1 + 1)
// A function that performs a single operation on a single input of fixed number of inputs will in general have a constant time and space complexity
