const { reverseArray } = require("../E_reverseArray");

describe("reverseArray", () => {
  it("returns an array", () => {
    expect(typeof reverseArray([1, 2, 3, 4, 5])).toBe("object");
  }),
    it("returns [] when passed []", () => {
      expect(reverseArray([])).toEqual([]);
    }),
    it("returns [1] when passed [1]", () => {
      expect(reverseArray([1])).toEqual([1]);
    }),
    it("returns [5, 4, 3, 2, 1] when passed [1, 2, 3, 4, 5]", () => {
      expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
    }),
    it("returns [10, 9, 8, 7, 6, 5] when passed [5, 6, 7, 8, 9, 10]", () => {
      expect(reverseArray([5, 6, 7, 8, 9, 10])).toEqual([10, 9, 8, 7, 6, 5]);
    }),
    it("returns [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] when passed [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
      expect(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([
        10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
      ]);
    });
});
