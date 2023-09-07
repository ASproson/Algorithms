"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const E_getRealFloor_1 = require("../Easy/E_getRealFloor");
describe('getRealFloor()', () => {
    it('should return the correct European floor for American floor numbers', () => {
        expect((0, E_getRealFloor_1.getRealFloor)(1)).toBe(0);
        expect((0, E_getRealFloor_1.getRealFloor)(5)).toBe(4);
        expect((0, E_getRealFloor_1.getRealFloor)(15)).toBe(13);
    });
    it('should handle basement floors correctly', () => {
        expect((0, E_getRealFloor_1.getRealFloor)(-3)).toBe(-3);
        expect((0, E_getRealFloor_1.getRealFloor)(0)).toBe(0);
    });
});
