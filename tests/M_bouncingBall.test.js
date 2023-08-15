"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const M_bouncingBall_1 = require("../Medium/M_bouncingBall");
describe('bouncingBall()', () => {
    it('returns the correct number of passes', () => {
        expect((0, M_bouncingBall_1.bouncingBall)(3, 0.66, 1.5)).toBe(3);
        expect((0, M_bouncingBall_1.bouncingBall)(30.0, 0.66, 1.5)).toBe(15);
        expect((0, M_bouncingBall_1.bouncingBall)(30, 0.75, 1.5)).toBe(21);
        expect((0, M_bouncingBall_1.bouncingBall)(30, 0.4, 10)).toBe(3);
        expect((0, M_bouncingBall_1.bouncingBall)(3, 1, 1.5)).toBe(-1);
    });
});
