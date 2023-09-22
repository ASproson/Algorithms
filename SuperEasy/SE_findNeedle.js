"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNeedle = void 0;
const findNeedle = (haystack) => {
    const index = haystack.indexOf('needle');
    return `found the needle at position ${index}`;
};
exports.findNeedle = findNeedle;
