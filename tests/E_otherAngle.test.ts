import { otherAngle } from '../Easy/E_otherAngle';

otherAngle;

describe('otherAngle', () => {
  it('Sample Tests', () => {
    expect(otherAngle(30, 60)).toBe(90);
    expect(otherAngle(60, 60)).toBe(60);
    expect(otherAngle(43, 78)).toBe(59);
    expect(otherAngle(10, 20)).toBe(150);
    expect(otherAngle(0, 0)).toBe(180);
  });
});
