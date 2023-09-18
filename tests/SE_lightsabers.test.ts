import { howManyLightSabers } from '../SuperEasy/SE_lightsabers';

describe('howManyLightSabers()', () => {
  test('returns 18 when given Zach', () => {
    expect(howManyLightSabers('Zach')).toEqual(18);
  });
  test('returns 0 when given any name other than Zach', () => {
    expect(howManyLightSabers('Adam')).toEqual(0);
  });
  test('returns 0 when given any name other than Zach', () => {
    expect(howManyLightSabers()).toEqual(0);
  });
});
