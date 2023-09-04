"use strict";
//  Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDifference = void 0;
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8
// export const findDifference = (
//   a: [number, number, number],
//   b: [number, number, number]
// ): number => {
//   const aSum = a.reduce((a, b) => a * b);
//   const bSum = b.reduce((a, b) => a * b);
//   return aSum > bSum ? aSum - bSum : bSum - aSum;
// };
const findDifference = (a, b) => {
    return Math.abs(a.reduce((a, b) => a * b) - b.reduce((a, b) => a * b));
};
exports.findDifference = findDifference;
