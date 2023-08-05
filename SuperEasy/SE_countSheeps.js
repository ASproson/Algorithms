"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countSheeps = void 0;
const countSheeps = (arrayOfSheep) => {
    return arrayOfSheep.filter((bool) => bool === true).length;
};
exports.countSheeps = countSheeps;
