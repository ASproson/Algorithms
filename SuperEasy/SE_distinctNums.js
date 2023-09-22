"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distinctNums = void 0;
const distinctNums = (a) => {
    return [...new Set(a)];
};
exports.distinctNums = distinctNums;
