import { sortNums } from '../SuperEasy/SE_sortNums';

describe('sortNums()', () => {
  test('returns sorted array', () => {
    expect(sortNums([1, 2, 10, 50, 5])).toEqual([1, 2, 5, 10, 50]);
  });
  test('when given an empty array returns empty array', () => {
    expect(sortNums([])).toEqual([]);
  });
});
