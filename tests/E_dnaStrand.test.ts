import { dnaStrand } from '../Easy/E_dnaStrand';

describe('dnaStrand', () => {
  it('Sample tests', () => {
    expect(dnaStrand('AAAA')).toBe('TTTT');
    expect(dnaStrand('ATTGC')).toBe('TAACG');
    expect(dnaStrand('GTAT')).toBe('CATA');
  });
});
