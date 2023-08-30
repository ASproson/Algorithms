"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SE_finalGrade_1 = require("../SuperEasy/SE_finalGrade");
describe('finalGrade()', () => {
    it('Fixed tests', () => {
        expect((0, SE_finalGrade_1.finalGrade)(100, 12)).toBe(100);
        expect((0, SE_finalGrade_1.finalGrade)(85, 5)).toBe(90);
    });
});
