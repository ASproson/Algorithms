import { numToString } from '../SuperEasy/SE_numToString';

describe('numToString()', () => {
  test('expect 24 to === "24"', () => {
    expect(numToString(24)).toBe('24');
    expect(typeof numToString(24)).toBe('string');
  });
});
