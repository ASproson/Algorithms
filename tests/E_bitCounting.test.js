const { bitCounting } = require("../Easy/E_bitCounting");

describe("bitCounting()", () => {
  test("when given 0 returns 0", () => {
    expect(bitCounting(0)).toEqual(0);
  });

  test("when given 4 returns 1", () => {
    expect(bitCounting(4)).toEqual(1);
  });
  test("when given 7 returns 3", () => {
    expect(bitCounting(7)).toEqual(3);
  });
  test("when given 9 returns 2", () => {
    expect(bitCounting(9)).toEqual(2);
  });
  test("when given 10 returns 2", () => {
    expect(bitCounting(10)).toEqual(2);
  });
});
