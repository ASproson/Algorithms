"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortAndStar = void 0;
const sortAndStar = (s) => {
    return s.sort()[0].split('').join('***');
};
exports.sortAndStar = sortAndStar;
