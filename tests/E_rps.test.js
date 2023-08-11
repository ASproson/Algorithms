"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const E_rps_1 = require("../Easy/E_rps");
describe('rps()', () => {
    const getMsg = (n) => `Player ${n} won!`;
    it('player 1 wins', () => {
        expect((0, E_rps_1.rps)('rock', 'scissors')).toBe(getMsg(1));
        expect((0, E_rps_1.rps)('scissors', 'paper')).toBe(getMsg(1));
        expect((0, E_rps_1.rps)('paper', 'rock')).toBe(getMsg(1));
    });
    it('player 2 wins', () => {
        expect((0, E_rps_1.rps)('scissors', 'rock')).toBe(getMsg(2));
        expect((0, E_rps_1.rps)('paper', 'scissors')).toBe(getMsg(2));
        expect((0, E_rps_1.rps)('rock', 'paper')).toBe(getMsg(2));
    });
    it('draw', () => {
        expect((0, E_rps_1.rps)('rock', 'rock')).toBe('Draw!');
        expect((0, E_rps_1.rps)('scissors', 'scissors')).toBe('Draw!');
        expect((0, E_rps_1.rps)('paper', 'paper')).toBe('Draw!');
    });
});
