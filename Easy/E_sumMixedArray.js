"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumMixedArray = void 0;
const sumMixedArray = (arr) => {
    return arr.reduce((a, b) => Number(a) + Number(b));
};
exports.sumMixedArray = sumMixedArray;
