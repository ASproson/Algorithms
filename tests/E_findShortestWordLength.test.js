"use strict";
const { shortestWordLength } = require('../Easy/E_findShortestWordLength');
describe('Sample Test Cases', () => {
    it('Should return the length of the shortest word(s)', () => {
        expect(shortestWordLength('take over the world maybe who knows perhaps')).toBe(3);
        expect(shortestWordLength('turns out random test cases are easier than writing out basic ones')).toBe(3);
        expect(shortestWordLength('lets talk about javascript the best language')).toBe(3);
        expect(shortestWordLength('i want to travel the world writing code one day')).toBe(1);
        expect(shortestWordLength('Lets all go on holiday somewhere very cold')).toBe(2);
        expect(shortestWordLength("Let's travel abroad shall we")).toBe(2);
    });
});
