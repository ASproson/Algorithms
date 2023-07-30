const { removeDuplicates } = require("../Easy/E_removeDuplicates");

describe("removeDuplicates()", () => {
  it("returns an array", () => {
    expect(typeof removeDuplicates([1, 2, 3, 4])).toEqual("object");
  }),
    it("returns [] when passed []", () => {
      expect(removeDuplicates([])).toEqual([]);
    }),
    it("returns [1, 2, 3, 4] when passed [1, 1, 2, 3, 4]", () => {
      expect(removeDuplicates([1, 1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    }),
    it("returns [1, 2, 3, 4] when passed [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4]", () => {
      expect(removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4])).toEqual([
        1, 2, 3, 4,
      ]);
    }),
    it("returns [1, 2, 3, 4] when passed [1, 2, 3, 4]", () => {
      expect(removeDuplicates([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });
});
