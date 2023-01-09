const { swapPointers } = require("../SE_swapPointers");

describe("swapPointers()", () => {
  it("returns an array", () => {
    expect(typeof swapPointers("add", 1)).toEqual("object");
  }),
    it("returns 1, add when passed add, 1", () => {
      expect(swapPointers("add", 1)).toEqual([1, "add"]);
    }),
    it("swaps values of variables using pointers", () => {
      let a = 5;
      let b = "hello";
      let [x, y] = swapPointers(a, b);
      expect(x).toBe("hello");
      expect(y).toBe(5);

      let p = { name: "John" };
      let q = [1, 2, 3];
      let [r, s] = swapPointers(p, q);
      expect(r).toEqual([1, 2, 3]);
      expect(s).toEqual({ name: "John" });
    });
});
