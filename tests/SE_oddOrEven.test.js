"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SE_oddOrEven_1 = require("../SuperEasy/SE_oddOrEven");
describe('oddOrEven()', () => {
    it('Edge tests', () => {
        expect((0, SE_oddOrEven_1.oddOrEven)([0])).toEqual('even');
        expect((0, SE_oddOrEven_1.oddOrEven)([1])).toEqual('odd');
        expect((0, SE_oddOrEven_1.oddOrEven)([])).toEqual('even');
    });
    it('Even tests', () => {
        expect((0, SE_oddOrEven_1.oddOrEven)([0, 1, 5])).toEqual('even');
        expect((0, SE_oddOrEven_1.oddOrEven)([0, 1, 3])).toEqual('even');
        expect((0, SE_oddOrEven_1.oddOrEven)([1023, 1, 2])).toEqual('even');
    });
    it('Negative Even tests', () => {
        expect((0, SE_oddOrEven_1.oddOrEven)([0, -1, -5])).toEqual('even');
        expect((0, SE_oddOrEven_1.oddOrEven)([0, -1, -3])).toEqual('even');
        expect((0, SE_oddOrEven_1.oddOrEven)([-1023, 1, -2])).toEqual('even');
    });
    it('Odd tests', () => {
        expect((0, SE_oddOrEven_1.oddOrEven)([0, 1, 2])).toEqual('odd');
        expect((0, SE_oddOrEven_1.oddOrEven)([0, 1, 4])).toEqual('odd');
        expect((0, SE_oddOrEven_1.oddOrEven)([1023, 1, 3])).toEqual('odd');
    });
    it('Negative Odd tests', () => {
        expect((0, SE_oddOrEven_1.oddOrEven)([0, -1, 2])).toEqual('odd');
        expect((0, SE_oddOrEven_1.oddOrEven)([0, 1, -4])).toEqual('odd');
        expect((0, SE_oddOrEven_1.oddOrEven)([-1023, -1, 3])).toEqual('odd');
    });
});
