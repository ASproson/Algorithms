"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPangram = void 0;
const isPangram = (phrase) => {
    if (phrase.length < 26)
        return false;
    const uniqueLettersSet = new Set(phrase.toLowerCase().match(/[a-z]/g));
    return uniqueLettersSet.size === 26 ? true : false;
};
exports.isPangram = isPangram;
