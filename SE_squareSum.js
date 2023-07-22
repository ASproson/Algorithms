"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squareSum = void 0;
const squareSum = (numbers) => {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i] * numbers[i];
    }
    return total;
};
exports.squareSum = squareSum;
