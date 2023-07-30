const { pivotIndex } = require("../Easy/E_pivotIndex");

describe("pivotIndex", () => {
  it("returns type number", () => {
    expect(typeof pivotIndex([1, 2, 3])).toBe("number");
  }),
    it("returns i of 3 when passed [1, 7, 3, 6, 5, 6]", () => {
      expect(pivotIndex([1, 7, 3, 6, 5, 6])).toEqual(3);
    }),
    it("returns -1 when passed [1, 2, 3]", () => {
      expect(pivotIndex([1, 2, 3])).toEqual(-1);
    }),
    it("returns i of 0 when passed [2, 1, -1]", () => {
      expect(pivotIndex([2, 1, -1])).toEqual(0);
    });
});
