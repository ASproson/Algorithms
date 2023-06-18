import { endWith } from '../SuperEasy/SE_endWith';

describe('endWith()', () => {
  it('returns true when given abcde && cde', () => {
    expect(endWith('abcde', 'cde')).toEqual(true);
  });
  it('returns false when given acbde && abc', () => {
    expect(endWith('abcde', 'abc')).toEqual(false);
  });
  it('returns true when given abc and empty string', () => {
    expect(endWith('abc', '')).toEqual(true);
  });
});
