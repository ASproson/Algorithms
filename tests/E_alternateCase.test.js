"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const E_alternateCase_1 = require("../Easy/E_alternateCase");
describe('Sample Test Cases', () => {
    it('Should return a reversed case value', () => {
        expect((0, E_alternateCase_1.alternateCase)('hello world')).toBe('HELLO WORLD');
        expect((0, E_alternateCase_1.alternateCase)('HeLLo WoRLD')).toBe('hEllO wOrld');
        expect((0, E_alternateCase_1.alternateCase)('1a2b3c4d5e')).toBe('1A2B3C4D5E');
    });
});
