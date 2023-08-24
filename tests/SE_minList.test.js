"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SE_minList_1 = require("../SuperEasy/SE_minList");
describe('minList()', () => {
    test('default tests', () => {
        expect((0, SE_minList_1.minList)([-52, 56, 30, 29, -54, 0, -110])).toEqual(-110);
        expect((0, SE_minList_1.minList)([42, 54, 65, 87, 0])).toEqual(0);
    });
});
