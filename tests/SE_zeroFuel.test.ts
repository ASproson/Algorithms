import { zeroFuel } from '../SuperEasy/SE_zeroFuel';

describe('zeroFill', () => {
  it('Fuel tests', () => {
    expect(zeroFuel({ distance: 50, mpg: 25, fuelLeft: 2 })).toBe(true);
    expect(zeroFuel({ distance: 100, mpg: 50, fuelLeft: 1 })).toBe(false);
  });
});
