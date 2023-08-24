import { alternateCase } from '../Easy/E_alternateCase';

describe('Sample Test Cases', () => {
  it('Should return a reversed case value', () => {
    expect(alternateCase('hello world')).toBe('HELLO WORLD');
    expect(alternateCase('HeLLo WoRLD')).toBe('hEllO wOrld');
    expect(alternateCase('1a2b3c4d5e')).toBe('1A2B3C4D5E');
  });
});
