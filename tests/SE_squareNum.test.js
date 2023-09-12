"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SE_squareNum_1 = require("../SuperEasy/SE_squareNum");
describe('squareNum()', () => {
    test('returns sqrt', () => {
        expect((0, SE_squareNum_1.squareNum)(4)).toEqual(16);
    });
    test('returns sqrt', () => {
        expect((0, SE_squareNum_1.squareNum)(16)).toEqual(256);
    });
});
