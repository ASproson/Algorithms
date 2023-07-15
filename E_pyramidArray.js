"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pyramidArray = void 0;
const pyramidArray = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let temp = [];
        let j = i;
        while (j >= 0) {
            temp.push(1);
            j--;
        }
        arr.push(temp);
    }
    return arr;
};
exports.pyramidArray = pyramidArray;
