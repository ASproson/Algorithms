import { distinctNums } from '../SuperEasy/SE_distinctNums';

describe('solution', () => {
  it('should handle an array with one number', () => {
    expect(distinctNums([1])).toEqual([1]);
  });

  it('should handle an array with two numbers but no duplicates', () => {
    expect(distinctNums([1, 2])).toEqual([1, 2]);
  });

  it('should handle an array with two numbers and a duplicate', () => {
    expect(distinctNums([1, 1, 2])).toEqual([1, 2]);
  });
});
