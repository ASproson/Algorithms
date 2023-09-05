"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicatesCount = void 0;
const duplicatesCount = (text) => {
    const map = {};
    const lowerText = text.toLowerCase();
    for (let i = 0; i < lowerText.length; i++) {
        const char = lowerText[i];
        if (map[char]) {
            map[char]++;
        }
        else {
            map[char] = 1;
        }
    }
    return Object.values(map).filter((value) => value > 1).length;
};
exports.duplicatesCount = duplicatesCount;
