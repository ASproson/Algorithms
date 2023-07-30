const { pyramidArray } = require("../Easy/E_pyramidArray");

describe("pyramidArray()", () => {
  test("returns [] when given 0", () => {
    expect(pyramidArray(0)).toEqual([]);
  });
  test("returns [[1]] when given 1", () => {
    expect(pyramidArray(1)).toEqual([[1]]);
  });
  test("returns [[1], [1, 1]] when given 2", () => {
    expect(pyramidArray(2)).toEqual([[1], [1, 1]]);
  });
  test("returns [[1], [1, 1], [1, 1, 1]] when given 3", () => {
    expect(pyramidArray(3)).toEqual([[1], [1, 1], [1, 1, 1]]);
  });
});
