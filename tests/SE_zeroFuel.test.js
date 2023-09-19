"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SE_zeroFuel_1 = require("../SuperEasy/SE_zeroFuel");
describe('zeroFill', () => {
    it('Fuel tests', () => {
        expect((0, SE_zeroFuel_1.zeroFuel)({ distance: 50, mpg: 25, fuelLeft: 2 })).toBe(true);
        expect((0, SE_zeroFuel_1.zeroFuel)({ distance: 100, mpg: 50, fuelLeft: 1 })).toBe(false);
    });
});
