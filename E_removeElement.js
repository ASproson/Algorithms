"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeElement = void 0;
const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};
exports.removeElement = removeElement;
// Time complexity is O(n) as we have to traverse the entire array to ensure all the deletions occur
// Space complexity is O(1) as it uses a constant amount of space as modify the array in place
