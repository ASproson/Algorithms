import { makeNegative } from '../SuperEasy/SE_makeNegative';

describe('makeNegative()', () => {
  test('when given a positve returns a negative', () => {
    expect(makeNegative(10)).toEqual(-10);
  });
  test('when given a positve returns a negative', () => {
    expect(makeNegative(1)).toEqual(-1);
  });
  test('when given a positve returns a negative', () => {
    expect(makeNegative(549874651)).toEqual(-549874651);
  });
  test('when given a negative returns a negative', () => {
    expect(makeNegative(-549874651)).toEqual(-549874651);
  });
  test('when given 0 returns 0', () => {
    expect(makeNegative(0)).toEqual(0);
  });
});
