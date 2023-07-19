const { boolToWord } = require("../SE_boolToWord");

describe("boolToWord()", () => {
  test("returns Yes when given true", () => {
    expect(boolToWord(true)).toEqual("Yes");
  });
  test("returns No when given false", () => {
    expect(boolToWord(false)).toEqual("No");
  });
});
