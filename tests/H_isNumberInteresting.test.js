"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const H_isNumberInteresting_1 = require("../Hard/H_isNumberInteresting");
describe('isNumberInteresting()', () => {
    it('', () => {
        expect((0, H_isNumberInteresting_1.isNumberInteresting)(3, [1337, 256])).toBe(0);
        expect((0, H_isNumberInteresting_1.isNumberInteresting)(1336, [1337, 256])).toBe(1);
        expect((0, H_isNumberInteresting_1.isNumberInteresting)(1337, [1337, 256])).toBe(2);
        expect((0, H_isNumberInteresting_1.isNumberInteresting)(11208, [1337, 256])).toBe(0);
        expect((0, H_isNumberInteresting_1.isNumberInteresting)(11209, [1337, 256])).toBe(1);
        expect((0, H_isNumberInteresting_1.isNumberInteresting)(11211, [1337, 256])).toBe(2);
    });
});
