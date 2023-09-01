"use strict";
// find the first element of an array that is not consecutive
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstNonConsecutive = void 0;
const firstNonConsecutive = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let next = arr[i + 1];
        if (arr[i] + 1 === next) {
            continue;
        }
        else {
            return next;
        }
    }
    return null;
};
exports.firstNonConsecutive = firstNonConsecutive;
