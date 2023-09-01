"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const E_firstNonConsecutive_1 = require("../Easy/E_firstNonConsecutive");
describe('a positive example', () => {
    it('returns 6', () => {
        const first = (0, E_firstNonConsecutive_1.firstNonConsecutive)([1, 2, 3, 4, 6, 7, 8]);
        expect(first).toBe(6);
    });
});
describe('all sequential', () => {
    it('returns null', () => {
        const first = (0, E_firstNonConsecutive_1.firstNonConsecutive)([4, 5, 6, 7, 8]);
        expect(first).toBeNull();
    });
});
