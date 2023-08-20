"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const E_arrayDiff_1 = require("../Easy/E_arrayDiff");
describe('arrayDiff()', () => {
    it('should return an empty array if the first array is empty', () => {
        expect((0, E_arrayDiff_1.arrayDiff)([], [4, 5])).toEqual([]);
    });
    it('should return an array with elements from the first array that are not in the second array', () => {
        expect((0, E_arrayDiff_1.arrayDiff)([3, 4], [3])).toEqual([4]);
        expect((0, E_arrayDiff_1.arrayDiff)([1, 8, 2], [])).toEqual([1, 8, 2]);
        expect((0, E_arrayDiff_1.arrayDiff)([1, 2, 3], [1, 2])).toEqual([3]);
    });
});
