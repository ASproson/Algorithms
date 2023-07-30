"use strict";
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIsogram = void 0;
const isIsogram = (str) => {
    if (str.length === 0)
        return true;
    const unique = [...new Set(str.toLowerCase())];
    return unique.length === str.length ? true : false;
};
exports.isIsogram = isIsogram;
