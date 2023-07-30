const add = require("../SuperEasy/SE_add");

describe("add()", () => {
  it("returns number", () => {
    expect(typeof add(2, 3)).toEqual("number");
  });
  it("returns 5 when passed 2, 3", () => {
    expect(add(2, 3)).toEqual(5);
  });
});
