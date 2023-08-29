"use strict";
// export const calcAverage = (arr: number[]): number => {
//   if (arr.length === 0) return 0;
//   return arr.reduce((a, b) => a + b) / arr.length;
// };
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcAverage = void 0;
const sumArray = (arr) => {
    return arr.reduce((a, b) => a + b);
};
const getAverage = (arr) => {
    return sumArray(arr) / arr.length;
};
const calcAverage = (arr) => {
    return getAverage(arr);
};
exports.calcAverage = calcAverage;
