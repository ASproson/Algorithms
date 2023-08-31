"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const E_isUpperCase_1 = require("../Easy/E_isUpperCase");
describe('Fixed Tests', () => {
    it('Testing for c', () => expect((0, E_isUpperCase_1.isUpperCase)('c')).toBe(false));
    it('Testing for C', () => expect((0, E_isUpperCase_1.isUpperCase)('C')).toBe(true));
    it('Testing for hello I AM DONALD', () => expect((0, E_isUpperCase_1.isUpperCase)('hello I AM DONALD')).toBe(false));
    it('Testing for HELLO I AM DONALD', () => expect((0, E_isUpperCase_1.isUpperCase)('HELLO I AM DONALD')).toBe(true));
    it('Testing for ACSKLDFJSgSKLDFJSKLDFJ', () => expect((0, E_isUpperCase_1.isUpperCase)('ACSKLDFJSgSKLDFJSKLDFJ')).toBe(false));
    it('Testing for ACSKLDFJSGSKLDFJSKLDFJ', () => expect((0, E_isUpperCase_1.isUpperCase)('ACSKLDFJSGSKLDFJSKLDFJ')).toBe(true));
});
