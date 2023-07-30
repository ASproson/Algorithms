const { paperwork } = require("../SuperEasy/SE_paperwork");

describe("paperwork()", () => {
  test("when given 5, 5 it returns 25", () => {
    expect(paperwork(5, 5)).toEqual(25);
  });
  test("when given 5, -5 it returns 0", () => {
    expect(paperwork(5, -5)).toEqual(0);
  });
  test("when given -5, -5 it returns 0", () => {
    expect(paperwork(-5, -5)).toEqual(0);
  });
  test("when given -5, 5 it returns 0", () => {
    expect(paperwork(-5, 5)).toEqual(0);
  });
  test("when given 5, 0 it returns 0", () => {
    expect(paperwork(5, 0)).toEqual(0);
  });
});
