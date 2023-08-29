"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const E_mumblingWords_1 = require("../Easy/E_mumblingWords");
describe('mumblingWords()', () => {
    it('should return the expected values for basic tests', () => {
        expect((0, E_mumblingWords_1.mumblingWords)('ZpglnRxqenU')).toBe('Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu');
        expect((0, E_mumblingWords_1.mumblingWords)('NyffsGeyylB')).toBe('N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb');
        expect((0, E_mumblingWords_1.mumblingWords)('MjtkuBovqrU')).toBe('M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu');
        expect((0, E_mumblingWords_1.mumblingWords)('EvidjUnokmM')).toBe('E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm');
        expect((0, E_mumblingWords_1.mumblingWords)('HbideVbxncC')).toBe('H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc');
    });
});
