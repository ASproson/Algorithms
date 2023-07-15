"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanString = void 0;
const cleanString = (s) => {
    let newStr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "#")
            newStr.push(s[i]);
        if (s[i] === "#")
            newStr.pop();
    }
    return newStr.join("");
};
exports.cleanString = cleanString;
