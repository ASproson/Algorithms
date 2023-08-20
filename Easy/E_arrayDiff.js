"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayDiff = void 0;
const arrayDiff = (a, b) => {
    return a.filter((e) => !b.includes(e));
};
exports.arrayDiff = arrayDiff;
