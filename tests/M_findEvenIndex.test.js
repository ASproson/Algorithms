"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const M_findEvenIndex_1 = require("../Medium/M_findEvenIndex");
describe('findEvenIndex', () => {
    it('Tests', () => {
        expect((0, M_findEvenIndex_1.findEvenIndex)([1, 2, 3, 4, 3, 2, 1])).toBe(3);
        expect((0, M_findEvenIndex_1.findEvenIndex)([1, 100, 50, -51, 1, 1])).toBe(1);
        expect((0, M_findEvenIndex_1.findEvenIndex)([1, 2, 3, 4, 5, 6])).toBe(-1);
        expect((0, M_findEvenIndex_1.findEvenIndex)([20, 10, 30, 10, 10, 15, 35])).toBe(3);
    });
});
