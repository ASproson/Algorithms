"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SE_numsBetween_1 = require("../SuperEasy/SE_numsBetween");
describe('Basic tests', () => {
    it('Basic tests should work', () => {
        expect((0, SE_numsBetween_1.numsBetween)(1, 4)).toEqual([1, 2, 3, 4]);
        expect((0, SE_numsBetween_1.numsBetween)(-2, 2)).toEqual([-2, -1, 0, 1, 2]);
    });
});
