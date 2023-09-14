"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const E_numToAscii_1 = require("../Easy/E_numToAscii");
describe('numToAscii()', () => {
    it("should return '7' when called with 55", () => {
        expect((0, E_numToAscii_1.numToAscii)(55)).toBe('7');
    });
    it("should return '8' when called with 56", () => {
        expect((0, E_numToAscii_1.numToAscii)(56)).toBe('8');
    });
    it("should return '9' when called with 57", () => {
        expect((0, E_numToAscii_1.numToAscii)(57)).toBe('9');
    });
    it("should return ':' when called with 58", () => {
        expect((0, E_numToAscii_1.numToAscii)(58)).toBe(':');
    });
    it("should return ';' when called with 59", () => {
        expect((0, E_numToAscii_1.numToAscii)(59)).toBe(';');
    });
    it("should return '<' when called with 60", () => {
        expect((0, E_numToAscii_1.numToAscii)(60)).toBe('<');
    });
    it("should return '=' when called with 61", () => {
        expect((0, E_numToAscii_1.numToAscii)(61)).toBe('=');
    });
    it("should return '>' when called with 62", () => {
        expect((0, E_numToAscii_1.numToAscii)(62)).toBe('>');
    });
    it("should return '?' when called with 63", () => {
        expect((0, E_numToAscii_1.numToAscii)(63)).toBe('?');
    });
    it("should return '@' when called with 64", () => {
        expect((0, E_numToAscii_1.numToAscii)(64)).toBe('@');
    });
    it("should return 'A' when called with 65", () => {
        expect((0, E_numToAscii_1.numToAscii)(65)).toBe('A');
    });
});
