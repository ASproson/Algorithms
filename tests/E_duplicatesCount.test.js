"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const E_duplicatesCount_1 = require("../Easy/E_duplicatesCount");
describe('duplicatesCount', () => {
    test('empty string should return 0', () => {
        expect((0, E_duplicatesCount_1.duplicatesCount)('')).toBe(0);
    });
    test('no duplicate characters should return 0', () => {
        expect((0, E_duplicatesCount_1.duplicatesCount)('abcde')).toBe(0);
    });
    test('two duplicate characters should return 2', () => {
        expect((0, E_duplicatesCount_1.duplicatesCount)('aabbcde')).toBe(2);
    });
    test('ignore case for duplicates, should return 2', () => {
        expect((0, E_duplicatesCount_1.duplicatesCount)('aabBcde')).toBe(2);
    });
    test('one character with multiple duplicates should return 1', () => {
        expect((0, E_duplicatesCount_1.duplicatesCount)('Indivisibility')).toBe(1);
    });
    test('characters may not be adjacent, should return 2', () => {
        expect((0, E_duplicatesCount_1.duplicatesCount)('Indivisibilities')).toBe(2);
    });
});
