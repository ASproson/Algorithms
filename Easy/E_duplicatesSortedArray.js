"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDuplicatesSortedArray = void 0;
const removeDuplicatesSortedArray = (nums) => {
    if (!nums.length)
        return 0;
    let uniqueValueCounter = 1;
    let heldValue = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== heldValue) {
            uniqueValueCounter++;
            heldValue = nums[i];
            nums[uniqueValueCounter - 1] = heldValue;
        }
    }
    return uniqueValueCounter;
};
exports.removeDuplicatesSortedArray = removeDuplicatesSortedArray;
// Time complexity is O(n), n is the length of the input array 'nums'. This is because we have to check if each value is unique or not
// Space complexity is O(1) as it uses a constant amount of space, regardless of the size of the input array
