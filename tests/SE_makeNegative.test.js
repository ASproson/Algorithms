"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SE_makeNegative_1 = require("../SuperEasy/SE_makeNegative");
describe('makeNegative()', () => {
    test('when given a positve returns a negative', () => {
        expect((0, SE_makeNegative_1.makeNegative)(10)).toEqual(-10);
    });
    test('when given a positve returns a negative', () => {
        expect((0, SE_makeNegative_1.makeNegative)(1)).toEqual(-1);
    });
    test('when given a positve returns a negative', () => {
        expect((0, SE_makeNegative_1.makeNegative)(549874651)).toEqual(-549874651);
    });
    test('when given a negative returns a negative', () => {
        expect((0, SE_makeNegative_1.makeNegative)(-549874651)).toEqual(-549874651);
    });
    test('when given 0 returns 0', () => {
        expect((0, SE_makeNegative_1.makeNegative)(0)).toEqual(0);
    });
});
