"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SE_findNeedle_1 = require("../SuperEasy/SE_findNeedle");
describe('findNeedle', () => {
    it('should find the needle at the correct position', () => {
        expect((0, SE_findNeedle_1.findNeedle)([
            '3',
            '123124234',
            null,
            'needle',
            'world',
            'hay',
            2,
            '3',
            true,
            false,
        ])).toBe('found the needle at position 3');
        expect((0, SE_findNeedle_1.findNeedle)([
            '283497238987234',
            'a dog',
            'a cat',
            'some random junk',
            'a piece of hay',
            'needle',
            'something somebody lost a while ago',
        ])).toBe('found the needle at position 5');
        expect((0, SE_findNeedle_1.findNeedle)([
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            8,
            7,
            5,
            4,
            3,
            4,
            5,
            6,
            67,
            5,
            5,
            3,
            3,
            4,
            2,
            34,
            234,
            23,
            4,
            234,
            324,
            324,
            'needle',
            1,
            2,
            3,
            4,
            5,
            5,
            6,
            5,
            4,
            32,
            3,
            45,
            54,
        ])).toBe('found the needle at position 30');
        expect((0, SE_findNeedle_1.findNeedle)([
            'needle',
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            8,
            7,
            5,
            4,
            3,
            4,
            5,
            6,
            67,
            5,
            5,
            3,
            3,
            4,
            2,
            34,
            234,
            23,
            4,
            234,
            324,
            324,
            1,
            2,
            3,
            4,
            5,
            5,
            6,
            5,
            4,
            32,
            3,
            45,
            54,
        ])).toBe('found the needle at position 0');
        expect((0, SE_findNeedle_1.findNeedle)([
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            8,
            7,
            5,
            4,
            3,
            4,
            5,
            6,
            67,
            5,
            5,
            3,
            3,
            4,
            2,
            34,
            234,
            23,
            4,
            234,
            324,
            324,
            1,
            2,
            3,
            4,
            5,
            5,
            6,
            5,
            4,
            32,
            3,
            45,
            54,
            'needle',
        ])).toBe('found the needle at position 43');
    });
});
