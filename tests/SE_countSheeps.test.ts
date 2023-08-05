const { countSheeps } = require("../SuperEasy/SE_countSheeps");

describe("countSheeps()", () => {
  test("when given arr returns 17", () => {
    const arr = [
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
    ];
    expect(countSheeps(arr)).toEqual(17);
  });
});
