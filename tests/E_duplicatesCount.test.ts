import { duplicatesCount } from '../Easy/E_duplicatesCount';

describe('duplicatesCount', () => {
  test('empty string should return 0', () => {
    expect(duplicatesCount('')).toBe(0);
  });

  test('no duplicate characters should return 0', () => {
    expect(duplicatesCount('abcde')).toBe(0);
  });

  test('two duplicate characters should return 2', () => {
    expect(duplicatesCount('aabbcde')).toBe(2);
  });

  test('ignore case for duplicates, should return 2', () => {
    expect(duplicatesCount('aabBcde')).toBe(2);
  });

  test('one character with multiple duplicates should return 1', () => {
    expect(duplicatesCount('Indivisibility')).toBe(1);
  });

  test('characters may not be adjacent, should return 2', () => {
    expect(duplicatesCount('Indivisibilities')).toBe(2);
  });
});
