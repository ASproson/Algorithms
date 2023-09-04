import { strToArray } from '../SuperEasy/SE_strToArray';

describe('strToArray', () => {
  it('example 1', () => {
    expect(strToArray('Robin Singh')).toEqual(['Robin', 'Singh']);
  });

  it('example 2', () => {
    expect(strToArray('I love arrays they are my favorite')).toEqual([
      'I',
      'love',
      'arrays',
      'they',
      'are',
      'my',
      'favorite',
    ]);
  });
});
