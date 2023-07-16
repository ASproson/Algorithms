"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUnique = void 0;
const findUnique = (arr) => {
    let unique = 0;
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {
            obj[arr[i]]++;
        }
        else {
            obj[arr[i]] = 0;
        }
    }
    for (const key in obj) {
        if (obj[key] === 0)
            unique = Number(key);
    }
    return unique;
};
exports.findUnique = findUnique;
