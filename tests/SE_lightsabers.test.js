"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SE_lightsabers_1 = require("../SuperEasy/SE_lightsabers");
describe('howManyLightSabers()', () => {
    test('returns 18 when given Zach', () => {
        expect((0, SE_lightsabers_1.howManyLightSabers)('Zach')).toEqual(18);
    });
    test('returns 0 when given any name other than Zach', () => {
        expect((0, SE_lightsabers_1.howManyLightSabers)('Adam')).toEqual(0);
    });
    test('returns 0 when given any name other than Zach', () => {
        expect((0, SE_lightsabers_1.howManyLightSabers)()).toEqual(0);
    });
});
