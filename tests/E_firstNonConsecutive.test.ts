import { firstNonConsecutive } from '../Easy/E_firstNonConsecutive';

describe('a positive example', () => {
  it('returns 6', () => {
    const first = firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]);
    expect(first).toBe(6);
  });
});

describe('all sequential', () => {
  it('returns null', () => {
    const first = firstNonConsecutive([4, 5, 6, 7, 8]);
    expect(first).toBeNull();
  });
});
