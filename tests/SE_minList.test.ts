import { minList } from '../SuperEasy/SE_minList';

describe('minList()', () => {
  test('default tests', () => {
    expect(minList([-52, 56, 30, 29, -54, 0, -110])).toEqual(-110);
    expect(minList([42, 54, 65, 87, 0])).toEqual(0);
  });
});
