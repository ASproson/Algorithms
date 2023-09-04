"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SE_strToArray_1 = require("../SuperEasy/SE_strToArray");
describe('strToArray', () => {
    it('example 1', () => {
        expect((0, SE_strToArray_1.strToArray)('Robin Singh')).toEqual(['Robin', 'Singh']);
    });
    it('example 2', () => {
        expect((0, SE_strToArray_1.strToArray)('I love arrays they are my favorite')).toEqual([
            'I',
            'love',
            'arrays',
            'they',
            'are',
            'my',
            'favorite',
        ]);
    });
});
