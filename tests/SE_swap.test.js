const { swap } = require("../SE_swap");

describe("swap", () => {
  it("returns an array", () => {
    expect(typeof swap()).toEqual("object");
  }),
    it("returns D, 10 when passed [10, D]", () => {
      expect(swap(10, "D")).toEqual(["D", 10]);
    });
});
