"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const E_findSmallestInt_1 = require("../Easy/E_findSmallestInt");
describe('findSmallestInt()', () => {
    it('Fixed Tests', () => {
        expect((0, E_findSmallestInt_1.findSmallestInt)([78, 56, 232, 12, 8])).toBe(8);
        expect((0, E_findSmallestInt_1.findSmallestInt)([78, 56, 232, 12, 18])).toBe(12);
        expect((0, E_findSmallestInt_1.findSmallestInt)([78, 56, 232, 412, 228])).toBe(56);
        expect((0, E_findSmallestInt_1.findSmallestInt)([78, 56, 232, 12, 0])).toBe(0);
        expect((0, E_findSmallestInt_1.findSmallestInt)([1, 56, 232, 12, 8])).toBe(1);
    });
});
