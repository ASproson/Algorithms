const { findUnique } = require("../M_findUnique");

describe("findUnique()", () => {
  test("expect [ 1, 1, 1, 2, 1, 1 ] to be 2", () => {
    expect(findUnique([1, 1, 1, 2, 1, 1])).toEqual(2);
  });
  test("expect [ 0, 0, 0.55, 0, 0 ] to be 0.55", () => {
    expect(findUnique([0, 0, 0.55, 0, 0])).toEqual(0.55);
  });
  test("expect [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2] to be 2", () => {
    expect(
      findUnique([
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
      ])
    ).toEqual(2);
  });
});
