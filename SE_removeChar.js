"use strict";
//  create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeChar = void 0;
const removeChar = (str) => {
    return str.slice(1, -1);
};
exports.removeChar = removeChar;
