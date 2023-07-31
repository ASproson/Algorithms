"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chainedAdding = void 0;
const chainedAdding = (x) => {
    let sum = x;
    const innerAdd = (n) => {
        if (n) {
            sum += n;
            return innerAdd;
        }
        else {
            return sum;
        }
    };
    return innerAdd;
};
exports.chainedAdding = chainedAdding;
