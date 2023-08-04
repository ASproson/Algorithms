const { reverseWords } = require("../Easy/E_reverseWords");

describe("reverseWords()", () => {
  test("when given The quick brown fox jumps over the lazy dog. expect ehT kciuq nworb xof spmuj revo eht yzal .god", () => {
    expect(
      reverseWords("The quick brown fox jumps over the lazy dog.")
    ).toEqual("ehT kciuq nworb xof spmuj revo eht yzal .god");
  });
  test("when given apple expect elppa", () => {
    expect(reverseWords("apple")).toEqual("elppa");
  });
  test("when given a b c d expect a b c d", () => {
    expect(reverseWords("a b c d")).toEqual("a b c d");
  });
  test("when given double  spaced  words expect elbuod  decaps  sdrow", () => {
    expect(reverseWords("double  spaced  words")).toEqual(
      "elbuod  decaps  sdrow"
    );
  });
});
