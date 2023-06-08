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
