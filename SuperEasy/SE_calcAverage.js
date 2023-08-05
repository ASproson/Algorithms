"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcAverage = void 0;
const calcAverage = (arr) => {
    if (arr.length === 0)
        return 0;
    return arr.reduce((a, b) => a + b) / arr.length;
};
exports.calcAverage = calcAverage;
