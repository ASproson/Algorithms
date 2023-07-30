const { findIndex } = require("../SuperEasy/SE_findIndex");

describe("findIndex()", () => {
  it("returns a number", () => {
    expect(typeof findIndex([1, 2, 3], 3)).toEqual("number");
  }),
    it("returns 2 when passed [1, 2, 3]", () => {
      expect(findIndex([1, 2, 3], 3)).toEqual(2);
    });
});
