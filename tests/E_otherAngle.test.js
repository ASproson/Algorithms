"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const E_otherAngle_1 = require("../Easy/E_otherAngle");
E_otherAngle_1.otherAngle;
describe('otherAngle', () => {
    it('Sample Tests', () => {
        expect((0, E_otherAngle_1.otherAngle)(30, 60)).toBe(90);
        expect((0, E_otherAngle_1.otherAngle)(60, 60)).toBe(60);
        expect((0, E_otherAngle_1.otherAngle)(43, 78)).toBe(59);
        expect((0, E_otherAngle_1.otherAngle)(10, 20)).toBe(150);
        expect((0, E_otherAngle_1.otherAngle)(0, 0)).toBe(180);
    });
});
