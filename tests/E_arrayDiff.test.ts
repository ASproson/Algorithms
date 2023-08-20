import { arrayDiff } from '../Easy/E_arrayDiff';

describe('arrayDiff()', () => {
  it('should return an empty array if the first array is empty', () => {
    expect(arrayDiff([], [4, 5])).toEqual([]);
  });

  it('should return an array with elements from the first array that are not in the second array', () => {
    expect(arrayDiff([3, 4], [3])).toEqual([4]);
    expect(arrayDiff([1, 8, 2], [])).toEqual([1, 8, 2]);
    expect(arrayDiff([1, 2, 3], [1, 2])).toEqual([3]);
  });
});
