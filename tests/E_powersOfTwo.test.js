"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const E_powersOfTwo_1 = require("../Easy/E_powersOfTwo");
describe('Basic Tests', () => {
    it('Testing for fixed tests', () => {
        expect((0, E_powersOfTwo_1.powersOfTwo)(0)).toEqual([1]);
        expect((0, E_powersOfTwo_1.powersOfTwo)(1)).toEqual([1, 2]);
        expect((0, E_powersOfTwo_1.powersOfTwo)(4)).toEqual([1, 2, 4, 8, 16]);
    });
});
