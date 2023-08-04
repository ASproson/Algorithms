"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseWords = void 0;
const reverseWords = (str) => {
    const words = str.split(" ");
    const reversedWords = words.map((word) => word.split("").reverse().join(""));
    return reversedWords.join(" ");
};
exports.reverseWords = reverseWords;
