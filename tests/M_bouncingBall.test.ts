import { bouncingBall } from '../Medium/M_bouncingBall';

describe('bouncingBall()', () => {
  it('returns the correct number of passes', () => {
    expect(bouncingBall(3, 0.66, 1.5)).toBe(3);
    expect(bouncingBall(30.0, 0.66, 1.5)).toBe(15);
    expect(bouncingBall(30, 0.75, 1.5)).toBe(21);
    expect(bouncingBall(30, 0.4, 10)).toBe(3);
    expect(bouncingBall(3, 1, 1.5)).toBe(-1);
  });
});
