"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const E_doubleChar_1 = require("../Easy/E_doubleChar");
describe('doubleChar()', () => {
    it('passes base examples', () => {
        expect((0, E_doubleChar_1.doubleChar)('abcd')).toBe('aabbccdd');
        expect((0, E_doubleChar_1.doubleChar)('Adidas')).toBe('AAddiiddaass');
        expect((0, E_doubleChar_1.doubleChar)('1337')).toBe('11333377');
        expect((0, E_doubleChar_1.doubleChar)('illuminati')).toBe('iilllluummiinnaattii');
        expect((0, E_doubleChar_1.doubleChar)('123456')).toBe('112233445566');
        expect((0, E_doubleChar_1.doubleChar)('%^&*(')).toBe('%%^^&&**((');
    });
});
