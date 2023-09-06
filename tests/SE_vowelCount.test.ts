import { vowelCount } from '../SuperEasy/SE_vowelCount';

describe('vowelCount', () => {
  it('should return 0 for an empty string', () => {
    expect(vowelCount('')).toBe(0);
  });

  it('should return 0 when there are no vowels', () => {
    expect(vowelCount('hjkl')).toBe(0);
  });

  it('should return the correct count for lowercase vowels', () => {
    expect(vowelCount('aeiou')).toBe(5);
  });

  it('should return the correct count for mixed case vowels', () => {
    expect(vowelCount('AeiOu')).toBe(5);
  });

  it('should return the correct count for a string with both vowels and consonants', () => {
    expect(vowelCount('Hello, World!')).toBe(3);
  });

  it('should ignore non-alphabetical characters', () => {
    expect(vowelCount('12345')).toBe(0);
  });

  it('should handle whitespace correctly', () => {
    expect(vowelCount('   A E I O U   ')).toBe(5);
  });
});
