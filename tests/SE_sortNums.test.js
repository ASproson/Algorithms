"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SE_sortNums_1 = require("../SuperEasy/SE_sortNums");
describe('sortNums()', () => {
    test('returns sorted array', () => {
        expect((0, SE_sortNums_1.sortNums)([1, 2, 10, 50, 5])).toEqual([1, 2, 5, 10, 50]);
    });
    test('when given an empty array returns empty array', () => {
        expect((0, SE_sortNums_1.sortNums)([])).toEqual([]);
    });
});
