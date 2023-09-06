"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SE_sumUpToNumber_1 = require("../SuperEasy/SE_sumUpToNumber");
describe('sumUpToNumber', () => {
    it('should return 0 for input 0', () => {
        expect((0, SE_sumUpToNumber_1.sumUpToNumber)(0)).toBe(0);
    });
    it('should return 1 for input 1', () => {
        expect((0, SE_sumUpToNumber_1.sumUpToNumber)(1)).toBe(1);
    });
    it('should return 3 for input 2', () => {
        expect((0, SE_sumUpToNumber_1.sumUpToNumber)(2)).toBe(3);
    });
    it('should return 6 for input 3', () => {
        expect((0, SE_sumUpToNumber_1.sumUpToNumber)(3)).toBe(6);
    });
    it('should return 10 for input 4', () => {
        expect((0, SE_sumUpToNumber_1.sumUpToNumber)(4)).toBe(10);
    });
    it('should return 15 for input 5', () => {
        expect((0, SE_sumUpToNumber_1.sumUpToNumber)(5)).toBe(15);
    });
    it('should return 21 for input 6', () => {
        expect((0, SE_sumUpToNumber_1.sumUpToNumber)(6)).toBe(21);
    });
});
