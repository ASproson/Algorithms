import { lineNumeration } from '../Easy/E_lineNumeration';

describe('Testing 1-2-3', () => {
  it('Fixed tests', () => {
    expect(lineNumeration([])).toEqual([]);
    expect(lineNumeration(['a', 'b', 'c'])).toEqual(['1: a', '2: b', '3: c']);
    expect(lineNumeration(['', '', '', '', ''])).toEqual([
      '1: ',
      '2: ',
      '3: ',
      '4: ',
      '5: ',
    ]);
  });
});
