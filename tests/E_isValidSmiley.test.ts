import { isValidSmiley } from '../Easy/E_isValidSmiley';

describe('isValidSmiley()', () => {
  test('when given [:D, :~), ;-D, :)] returns 4', () => {
    expect(isValidSmiley([':D', ':~)', ';~D', ':)'])).toEqual(4);
  });
  test('when given [":)",":(",":D",":O",":;"] returns 2', () => {
    expect(isValidSmiley([':)', ':(', ':D', ':O', ':;'])).toEqual(2);
  });
  test('when given [";]", ":[", ";*", ":$", ";-D"] returns 1', () => {
    expect(isValidSmiley([';]', ':[', ';*', ':$', ';-D'])).toEqual(1);
  });
});
