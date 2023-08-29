import { mumblingWords } from '../Easy/E_mumblingWords';

describe('mumblingWords()', () => {
  it('should return the expected values for basic tests', () => {
    expect(mumblingWords('ZpglnRxqenU')).toBe(
      'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu'
    );
    expect(mumblingWords('NyffsGeyylB')).toBe(
      'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb'
    );
    expect(mumblingWords('MjtkuBovqrU')).toBe(
      'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu'
    );
    expect(mumblingWords('EvidjUnokmM')).toBe(
      'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm'
    );
    expect(mumblingWords('HbideVbxncC')).toBe(
      'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc'
    );
  });
});
