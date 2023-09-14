import { numToAscii } from '../Easy/E_numToAscii';

describe('numToAscii()', () => {
  it("should return '7' when called with 55", () => {
    expect(numToAscii(55)).toBe('7');
  });

  it("should return '8' when called with 56", () => {
    expect(numToAscii(56)).toBe('8');
  });

  it("should return '9' when called with 57", () => {
    expect(numToAscii(57)).toBe('9');
  });

  it("should return ':' when called with 58", () => {
    expect(numToAscii(58)).toBe(':');
  });

  it("should return ';' when called with 59", () => {
    expect(numToAscii(59)).toBe(';');
  });

  it("should return '<' when called with 60", () => {
    expect(numToAscii(60)).toBe('<');
  });

  it("should return '=' when called with 61", () => {
    expect(numToAscii(61)).toBe('=');
  });

  it("should return '>' when called with 62", () => {
    expect(numToAscii(62)).toBe('>');
  });

  it("should return '?' when called with 63", () => {
    expect(numToAscii(63)).toBe('?');
  });

  it("should return '@' when called with 64", () => {
    expect(numToAscii(64)).toBe('@');
  });

  it("should return 'A' when called with 65", () => {
    expect(numToAscii(65)).toBe('A');
  });
});
