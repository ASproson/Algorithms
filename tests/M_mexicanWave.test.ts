import { mexicanWave } from '../Medium/M_mexicanWave';

describe('mexicanWave()', () => {
  test('when given "hello" returns ["Hello", "hEllo", "heLlo", "helLo", "hellO"]', () => {
    expect(mexicanWave('hello')).toEqual([
      'Hello',
      'hEllo',
      'heLlo',
      'helLo',
      'hellO',
    ]);
  });
  test('when given "two words" returns ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]', () => {
    expect(mexicanWave('two words')).toEqual([
      'Two words',
      'tWo words',
      'twO words',
      'two Words',
      'two wOrds',
      'two woRds',
      'two worDs',
      'two wordS',
    ]);
  });
  test('when given " gap " returns [" Gap ", " gAp ", " gaP "]', () => {
    expect(mexicanWave(' gap ')).toEqual([' Gap ', ' gAp ', ' gaP ']);
  });
});
