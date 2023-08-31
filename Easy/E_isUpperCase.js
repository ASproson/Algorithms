"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUpperCase = void 0;
const isUpperCase = (str) => {
    return str
        .split('')
        .map((_, idx) => str.charCodeAt(idx) < 91)
        .includes(false)
        ? false
        : true;
};
exports.isUpperCase = isUpperCase;
