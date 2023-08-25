"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const E_busStops_1 = require("../Easy/E_busStops");
describe('busStops()', () => {
    it('basic tests', () => {
        expect((0, E_busStops_1.busStops)([
            [10, 0],
            [3, 5],
            [5, 8],
        ])).toBe(5);
        expect((0, E_busStops_1.busStops)([
            [3, 0],
            [9, 1],
            [4, 10],
            [12, 2],
            [6, 1],
            [7, 10],
        ])).toBe(17);
        expect((0, E_busStops_1.busStops)([
            [3, 0],
            [9, 1],
            [4, 8],
            [12, 2],
            [6, 1],
            [7, 8],
        ])).toBe(21);
        expect((0, E_busStops_1.busStops)([[0, 0]])).toBe(0);
    });
});
