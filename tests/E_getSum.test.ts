const { getSum } = require("../Easy/E_getSum");

describe("getSum()", () => {
  test("when given 0,-1 it returns -1", () => {
    expect(getSum(0, -1)).toEqual(-1);
  });
  test("when given 0,1 it returns 1", () => {
    expect(getSum(0, 1)).toEqual(1);
  });
});
