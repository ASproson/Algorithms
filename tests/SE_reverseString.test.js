const { reverseString } = require("../SuperEasy/SE_reverseString");

describe("reverseString()", () => {
  test("returns drow when passed word", () => {
    expect(reverseString("word")).toEqual("drow");
  });
  test("returns olleh when passed hello", () => {
    expect(reverseString("hello")).toEqual("olleh");
  });
});
