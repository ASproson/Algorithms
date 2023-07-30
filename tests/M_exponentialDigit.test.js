const { exponentialDigit } = require("../Medium/M_exponentialDigit");

describe("exponentialDigit", () => {
  it("returns 1 when passed 89, 1", () => {
    expect(exponentialDigit(89, 1)).toEqual(1);
  });
  it("returns -1 when passed 92, 1", () => {
    expect(exponentialDigit(92, 1)).toEqual(-1);
  });
  it("returns 9 when passed 114, 3", () => {
    expect(exponentialDigit(114, 3)).toEqual(9);
  });
});
