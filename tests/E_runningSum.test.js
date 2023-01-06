const { runningSum } = require("../E_runningSum");

describe("runningSum", () => {
  it("returns an array of numbers", () => {
    expect(typeof runningSum([1, 2, 3])).toBe("object");
  }),
    it("[1, 2, 3, 4] to be [1, 3, 6, 10]", () => {
      expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
    }),
    it("[1, 1, 1, 1, 1] to be [1, 2, 3, 4, 5]", () => {
      expect(runningSum([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
    }),
    it("[3, 1, 2, 10, 1] to be [3, 4, 6, 16, 17]", () => {
      expect(runningSum([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17]);
    });
});
