import { numsBetween } from '../SuperEasy/SE_numsBetween';

describe('Basic tests', () => {
  it('Basic tests should work', () => {
    expect(numsBetween(1, 4)).toEqual([1, 2, 3, 4]);
    expect(numsBetween(-2, 2)).toEqual([-2, -1, 0, 1, 2]);
  });
});
