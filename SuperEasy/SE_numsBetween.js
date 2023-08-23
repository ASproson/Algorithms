"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numsBetween = void 0;
const numsBetween = (a, b) => {
    let numArr = [];
    while (a <= b) {
        numArr.push(a);
    }
    return numArr;
};
exports.numsBetween = numsBetween;
