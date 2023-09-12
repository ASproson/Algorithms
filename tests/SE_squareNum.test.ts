import { squareNum } from '../SuperEasy/SE_squareNum';

describe('squareNum()', () => {
  test('returns sqrt', () => {
    expect(squareNum(4)).toEqual(16);
  });
  test('returns sqrt', () => {
    expect(squareNum(16)).toEqual(256);
  });
});
