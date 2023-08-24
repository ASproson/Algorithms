"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alternateCase = void 0;
const alternateCase = (s) => {
    let newStr = '';
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === char.toUpperCase()) {
            newStr += char.toLowerCase();
        }
        else if (char === char.toLowerCase()) {
            newStr += char.toUpperCase();
        }
        else {
            newStr += char;
        }
    }
    return newStr;
};
exports.alternateCase = alternateCase;
