"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vowelCount = void 0;
const vowelCount = (str) => {
    return str
        .toLowerCase()
        .split('')
        .filter((c) => c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u').length;
};
exports.vowelCount = vowelCount;
