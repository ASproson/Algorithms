import { oppositeNumber } from '../Easy/E_oppositeNumber';

describe('oppositeNumber()', () => {
  test('when given 2 returns -2', () => {
    expect(oppositeNumber(2)).toEqual(-2);
  });
  test('when given 100 returns -100', () => {
    expect(oppositeNumber(100)).toEqual(-100);
  });
  test('when given 249 returns -249', () => {
    expect(oppositeNumber(249)).toEqual(-249);
  });
});
