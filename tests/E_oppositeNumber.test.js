"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const E_oppositeNumber_1 = require("../Easy/E_oppositeNumber");
describe('oppositeNumber()', () => {
    test('when given 2 returns -2', () => {
        expect((0, E_oppositeNumber_1.oppositeNumber)(2)).toEqual(-2);
    });
    test('when given 100 returns -100', () => {
        expect((0, E_oppositeNumber_1.oppositeNumber)(100)).toEqual(-100);
    });
    test('when given 249 returns -249', () => {
        expect((0, E_oppositeNumber_1.oppositeNumber)(249)).toEqual(-249);
    });
});
