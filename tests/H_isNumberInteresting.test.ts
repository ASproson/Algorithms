import { isNumberInteresting } from '../Hard/H_isNumberInteresting';

describe('solution', () => {
  it('should work, dangit!', () => {
    expect(isNumberInteresting(3, [1337, 256])).toBe(0);
    expect(isNumberInteresting(1336, [1337, 256])).toBe(1);
    expect(isNumberInteresting(1337, [1337, 256])).toBe(2);
    expect(isNumberInteresting(11208, [1337, 256])).toBe(0);
    expect(isNumberInteresting(11209, [1337, 256])).toBe(1);
    expect(isNumberInteresting(11211, [1337, 256])).toBe(2);
  });
});
