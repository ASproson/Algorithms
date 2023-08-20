"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const E_dnaStrand_1 = require("../Easy/E_dnaStrand");
describe('dnaStrand', () => {
    it('Sample tests', () => {
        expect((0, E_dnaStrand_1.dnaStrand)('AAAA')).toBe('TTTT');
        expect((0, E_dnaStrand_1.dnaStrand)('ATTGC')).toBe('TAACG');
        expect((0, E_dnaStrand_1.dnaStrand)('GTAT')).toBe('CATA');
    });
});
