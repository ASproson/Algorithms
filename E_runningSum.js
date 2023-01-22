"use strict";
const runningSum = (nums) => {
  const prefixSum = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i];
  }
  return prefixSum;
};

module.exports = { runningSum };
// Space O(1) as it creates a single additional data structure
// Time O(n) as we still need to touch every single element in the array
// const runningSum = (nums: number[]): number[] => {
//   for (let i = 1; i < nums.length; i++) {
//     nums[i] += nums[i - 1];
//   }
//   return nums;
// };
// module.exports = { runningSum };
// Space O(n) as we modify the array in place
// Time O(n) as need to touch every element in the array
