"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SE_distinctNums_1 = require("../SuperEasy/SE_distinctNums");
describe('solution', () => {
    it('should handle an array with one number', () => {
        expect((0, SE_distinctNums_1.distinctNums)([1])).toEqual([1]);
    });
    it('should handle an array with two numbers but no duplicates', () => {
        expect((0, SE_distinctNums_1.distinctNums)([1, 2])).toEqual([1, 2]);
    });
    it('should handle an array with two numbers and a duplicate', () => {
        expect((0, SE_distinctNums_1.distinctNums)([1, 1, 2])).toEqual([1, 2]);
    });
});
