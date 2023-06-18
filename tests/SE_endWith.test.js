"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SE_endWith_1 = require("../SuperEasy/SE_endWith");
describe('endWith()', () => {
    it('returns true when given abcde && cde', () => {
        expect((0, SE_endWith_1.endWith)('abcde', 'cde')).toEqual(true);
    });
    it('returns false when given acbde && abc', () => {
        expect((0, SE_endWith_1.endWith)('abcde', 'abc')).toEqual(false);
    });
    it('returns true when given abc and empty string', () => {
        expect((0, SE_endWith_1.endWith)('abc', '')).toEqual(true);
    });
});
