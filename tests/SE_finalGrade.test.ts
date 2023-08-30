import { finalGrade } from '../SuperEasy/SE_finalGrade';

describe('finalGrade()', () => {
  it('Fixed tests', () => {
    expect(finalGrade(100, 12)).toBe(100);
    expect(finalGrade(85, 5)).toBe(90);
  });
});
