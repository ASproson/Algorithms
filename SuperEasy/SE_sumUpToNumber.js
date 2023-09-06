"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumUpToNumber = void 0;
const sumUpToNumber = (num) => {
    let sum = 0;
    let i = 0;
    while (i < num) {
        i++;
        sum += i;
    }
    return sum;
};
exports.sumUpToNumber = sumUpToNumber;
