"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const E_sumMixedArray_1 = require("../Easy/E_sumMixedArray");
describe('sumMixedArray', () => {
    test('when given [9, 3, "7", "3"] returns #', () => {
        expect((0, E_sumMixedArray_1.sumMixedArray)([9, 3, '7', '3'])).toEqual(22);
    });
    test('when given ["5", "0", 9 , 3, 2, 1, "9", 6, 7] returns 42', () => {
        expect((0, E_sumMixedArray_1.sumMixedArray)(['5', '0', 9, 3, 2, 1, '9', 6, 7])).toEqual(42);
    });
    test('when given ["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"] returns 41', () => {
        expect((0, E_sumMixedArray_1.sumMixedArray)(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])).toEqual(41);
    });
});
