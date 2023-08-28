"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SE_betterThanAverage_1 = require("../SuperEasy/SE_betterThanAverage");
describe('Basic tests', () => {
    it('should return true for betterThanAverage([2, 3], 5)', () => {
        expect((0, SE_betterThanAverage_1.betterThanAverage)([2, 3], 5)).toBe(true);
    });
    it('should return true for betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)', () => {
        expect((0, SE_betterThanAverage_1.betterThanAverage)([100, 40, 34, 57, 29, 72, 57, 88], 75)).toBe(true);
    });
    it('should return true for betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69)', () => {
        expect((0, SE_betterThanAverage_1.betterThanAverage)([12, 23, 34, 45, 56, 67, 78, 89, 90], 69)).toBe(true);
    });
    it('should return false for betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)', () => {
        expect((0, SE_betterThanAverage_1.betterThanAverage)([41, 75, 72, 56, 80, 82, 81, 33], 50)).toBe(false);
    });
    it('should return false for betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)', () => {
        expect((0, SE_betterThanAverage_1.betterThanAverage)([29, 55, 74, 60, 11, 90, 67, 28], 21)).toBe(false);
    });
});
