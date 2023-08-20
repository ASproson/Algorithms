"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dnaStrand = void 0;
const map = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
};
const dnaStrand = (dna) => {
    return dna
        .split('')
        .map((e) => map[e])
        .join('');
};
exports.dnaStrand = dnaStrand;
