import { getRealFloor } from '../Easy/E_getRealFloor';

describe('getRealFloor()', () => {
  it('should return the correct European floor for American floor numbers', () => {
    expect(getRealFloor(1)).toBe(0);
    expect(getRealFloor(5)).toBe(4);
    expect(getRealFloor(15)).toBe(13);
  });

  it('should handle basement floors correctly', () => {
    expect(getRealFloor(-3)).toBe(-3);
    expect(getRealFloor(0)).toBe(0);
  });
});
