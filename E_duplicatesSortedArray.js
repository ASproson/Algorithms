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
