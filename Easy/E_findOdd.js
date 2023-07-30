"use strict";
// Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOdd = void 0;
const findOdd = (xs) => {
    let oddNum = 0;
    for (const num of xs) {
        oddNum ^= num;
    }
    return oddNum;
};
exports.findOdd = findOdd;
