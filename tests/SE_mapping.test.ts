import { mapping } from '../SuperEasy/SE_mapping';

describe('mapping()', () => {
  test('when given [1,2,3] returns [2,4,6]', () => {
    expect(mapping([1, 2, 3])).toEqual([2, 4, 6]);
  });
  test('when given [4,1,1,1,4] returns [8,2,2,2,8]', () => {
    expect(mapping([4, 1, 1, 1, 4])).toEqual([8, 2, 2, 2, 8]);
  });
  test('when given [2,2,2,2,2,2] returns [4,4,4,4,4,4]', () => {
    expect(mapping([2, 2, 2, 2, 2, 2])).toEqual([4, 4, 4, 4, 4, 4]);
  });
});
