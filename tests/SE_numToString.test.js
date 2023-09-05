"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SE_numToString_1 = require("../SuperEasy/SE_numToString");
describe('numToString()', () => {
    test('expect 24 to === "24"', () => {
        expect((0, SE_numToString_1.numToString)(24)).toBe('24');
        expect(typeof (0, SE_numToString_1.numToString)(24)).toBe('string');
    });
});
