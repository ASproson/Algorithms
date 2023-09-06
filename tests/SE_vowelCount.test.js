"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SE_vowelCount_1 = require("../SuperEasy/SE_vowelCount");
describe('vowelCount', () => {
    it('should return 0 for an empty string', () => {
        expect((0, SE_vowelCount_1.vowelCount)('')).toBe(0);
    });
    it('should return 0 when there are no vowels', () => {
        expect((0, SE_vowelCount_1.vowelCount)('hjkl')).toBe(0);
    });
    it('should return the correct count for lowercase vowels', () => {
        expect((0, SE_vowelCount_1.vowelCount)('aeiou')).toBe(5);
    });
    it('should return the correct count for mixed case vowels', () => {
        expect((0, SE_vowelCount_1.vowelCount)('AeiOu')).toBe(5);
    });
    it('should return the correct count for a string with both vowels and consonants', () => {
        expect((0, SE_vowelCount_1.vowelCount)('Hello, World!')).toBe(3);
    });
    it('should ignore non-alphabetical characters', () => {
        expect((0, SE_vowelCount_1.vowelCount)('12345')).toBe(0);
    });
    it('should handle whitespace correctly', () => {
        expect((0, SE_vowelCount_1.vowelCount)('   A E I O U   ')).toBe(5);
    });
});
