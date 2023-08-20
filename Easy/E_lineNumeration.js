"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lineNumeration = void 0;
const lineNumeration = (arr) => {
    return arr.map((e, idx) => `${idx + 1}: ${e}`);
};
exports.lineNumeration = lineNumeration;
