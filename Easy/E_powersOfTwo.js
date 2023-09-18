"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powersOfTwo = void 0;
const powersOfTwo = (n) => {
    const result = [];
    for (let i = 0; i <= n; i++) {
        result.push(2 ** i);
    }
    return result;
};
exports.powersOfTwo = powersOfTwo;
