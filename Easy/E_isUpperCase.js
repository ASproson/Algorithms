"use strict";
// export const isUpperCase = (str: string) => {
//   return str
//     .split('')
//     .map((_, idx) => str.charCodeAt(idx) < 91)
//     .includes(false)
//     ? false
//     : true;
// };
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUpperCase = void 0;
const isUpperCase = (str) => {
    return str === str.toUpperCase();
};
exports.isUpperCase = isUpperCase;
