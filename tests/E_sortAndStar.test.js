"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const E_sortAndStar_1 = require("../Easy/E_sortAndStar");
describe('sortAndStar()', () => {
    it('Sample tests', () => {
        expect((0, E_sortAndStar_1.sortAndStar)([
            'bitcoin',
            'take',
            'over',
            'the',
            'world',
            'maybe',
            'who',
            'knows',
            'perhaps',
        ])).toBe('b***i***t***c***o***i***n');
        expect((0, E_sortAndStar_1.sortAndStar)([
            'turns',
            'out',
            'random',
            'test',
            'cases',
            'are',
            'easier',
            'than',
            'writing',
            'out',
            'basic',
            'ones',
        ])).toBe('a***r***e');
        expect((0, E_sortAndStar_1.sortAndStar)([
            'lets',
            'talk',
            'about',
            'javascript',
            'the',
            'best',
            'language',
        ])).toBe('a***b***o***u***t');
        expect((0, E_sortAndStar_1.sortAndStar)([
            'i',
            'want',
            'to',
            'travel',
            'the',
            'world',
            'writing',
            'code',
            'one',
            'day',
        ])).toBe('c***o***d***e');
        expect((0, E_sortAndStar_1.sortAndStar)([
            'Lets',
            'all',
            'go',
            'on',
            'holiday',
            'somewhere',
            'very',
            'cold',
        ])).toBe('L***e***t***s');
    });
});
