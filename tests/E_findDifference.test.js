"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const E_findDifference_1 = require("../Easy/E_findDifference");
describe('Tests', () => {
    it('Basic tests', () => {
        expect((0, E_findDifference_1.findDifference)([3, 2, 5], [1, 4, 4])).toBe(14);
        expect((0, E_findDifference_1.findDifference)([9, 7, 2], [5, 2, 2])).toBe(106);
        expect((0, E_findDifference_1.findDifference)([11, 2, 5], [1, 10, 8])).toBe(30);
        expect((0, E_findDifference_1.findDifference)([4, 4, 7], [3, 9, 3])).toBe(31);
        expect((0, E_findDifference_1.findDifference)([15, 20, 25], [10, 30, 25])).toBe(0);
    });
});
