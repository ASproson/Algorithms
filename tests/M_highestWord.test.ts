import { highestWord } from '../Medium/M_highestWord';

const solutions = [
  ['man i need a taxi up to ubud', 'taxi'],
  ['what time are we climbing up the volcano', 'volcano'],
  ['take me to semynak', 'semynak'],
  ['massage yes massage yes massage', 'massage'],
  ['take two bintang and a dance please', 'bintang'],
  ['aa b', 'aa'],
  ['b aa', 'b'],
  ['bb d', 'bb'],
  ['d bb', 'd'],
  ['aaa b', 'aaa'],
];

describe('highestWord()', () => {
  test('works with test inputs', () => {
    solutions.forEach(([input, expected]) => {
      expect(highestWord(input)).toBe(expected);
    });
  });
});
