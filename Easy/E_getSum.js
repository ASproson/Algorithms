"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSum = void 0;
const getSum = (a, b) => {
    if (a === b)
        return a;
    const n = Math.abs(b - a) + 1;
    const sum = (n * (a + b)) / 2;
    return sum;
};
exports.getSum = getSum;
