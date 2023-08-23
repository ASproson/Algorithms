"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numsBetween = void 0;
const numsBetween = (a, b) => {
    // let numArr = [];
    // while (a <= b) {
    //   numArr.push(a);
    // }
    // return numArr;
    return Array.from({ length: b - a + 1 }, (_, idx) => a + idx);
};
exports.numsBetween = numsBetween;
