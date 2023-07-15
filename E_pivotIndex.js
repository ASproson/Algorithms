"use strict";
const pivotIndex = (nums) => {
    const sum = nums.reduce((acc, cur) => acc + cur, 0);
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === sum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};
module.exports = { pivotIndex };
// const pivotIndex = (nums: number[]): number => {
//   let leftSum = 0;
//   let rightSum = 0;
//   for (let i = 1; i < nums.length; i++) {
//     rightSum += nums[i];
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (leftSum === rightSum) {
//       return i;
//     }
//     leftSum += nums[i];
//     rightSum -= nums[i + 1] || 0;
//   }
//   return -1;
// };
// module.exports = { pivotIndex };
// Time: O(n) as we iterate through the array once for rightSum, and a second time for the pivotIndex
// Space: O(1) as it uses a constant amount of memory regardless of input array size
