"use strict";
// export const betterThanAverage = (
//   classPoints: number[],
//   yourPoints: number
// ): boolean => {
//   const totalPoints = classPoints.reduce((a, b) => a + b);
//   const avg = totalPoints / classPoints.length;
//   return yourPoints > avg ? true : false;
// };
Object.defineProperty(exports, "__esModule", { value: true });
exports.betterThanAverage = void 0;
const betterThanAverage = (classPoints, yourPoints) => {
    return yourPoints > getAverage(classPoints);
};
exports.betterThanAverage = betterThanAverage;
const getSum = (array) => {
    return array.reduce((a, b) => a + b);
};
const getAverage = (array) => {
    return getSum(array) / array.length;
};
