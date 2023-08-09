"use strict";
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumMixedArray = void 0;
const sumMixedArray = (arr) => {
    return arr.reduce((a, b) => Number(a) + Number(b));
};
exports.sumMixedArray = sumMixedArray;
