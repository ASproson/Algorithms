"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const E_lineNumeration_1 = require("../Easy/E_lineNumeration");
describe('Testing 1-2-3', () => {
    it('Fixed tests', () => {
        expect((0, E_lineNumeration_1.lineNumeration)([])).toEqual([]);
        expect((0, E_lineNumeration_1.lineNumeration)(['a', 'b', 'c'])).toEqual(['1: a', '2: b', '3: c']);
        expect((0, E_lineNumeration_1.lineNumeration)(['', '', '', '', ''])).toEqual([
            '1: ',
            '2: ',
            '3: ',
            '4: ',
            '5: ',
        ]);
    });
});
