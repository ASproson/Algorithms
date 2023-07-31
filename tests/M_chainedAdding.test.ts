const { chainedAdding } = require("../Medium/M_chainedAdding");

describe("chainedAdding()", () => {
  test("when given 1 returns 1", () => {
    expect(chainedAdding(1)()).toEqual(1); // Call the returned function to get the sum
  });

  test("when given 1, 2 returns 3", () => {
    expect(chainedAdding(1)(2)()).toEqual(3); // Call the returned function to get the sum
  });

  test("when given 1, 2, 3 returns 6", () => {
    expect(chainedAdding(1)(2)(3)()).toEqual(6); // Call the returned function to get the sum
  });

  test("when given 1, 2, 3, 4 returns 10", () => {
    expect(chainedAdding(1)(2)(3)(4)()).toEqual(10); // Call the returned function to get the sum
  });

  test("when given 1, 2, 3, 4, 5 returns 15", () => {
    expect(chainedAdding(1)(2)(3)(4)(5)()).toEqual(15); // Call the returned function to get the sum
  });
});
