"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortestWordLength = void 0;
const shortestWordLength = (str) => {
    let split = str.split(' ');
    let shortestWord = split[0].length;
    for (let i = 1; i < split.length; i++) {
        if (split[i].length < shortestWord) {
            shortestWord = split[i].length;
        }
    }
    return shortestWord;
};
exports.shortestWordLength = shortestWordLength;
