"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doubleChar = void 0;
const doubleChar = (str) => {
    return str
        .split('')
        .map((s) => s + s)
        .join('');
};
exports.doubleChar = doubleChar;
