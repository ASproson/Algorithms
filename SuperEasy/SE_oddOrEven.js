"use strict";
// export const oddOrEven = (arr: number[]): string => {
//   if (arr.length < 1) return 'even';
//   return arr.reduce((a, b) => a + b) % 2 === 0 ? 'even' : 'odd';
// };
Object.defineProperty(exports, "__esModule", { value: true });
exports.oddOrEven = void 0;
const sumArray = (arr) => {
    return arr.reduce((a, b) => a + b);
};
const oddOrEven = (arr) => {
    return sumArray(arr) % 2 === 0 ? 'even' : 'odd';
};
exports.oddOrEven = oddOrEven;
