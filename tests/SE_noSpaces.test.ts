const { noSpaces } = require("../SE_noSpaces");

describe("noSpaces()", () => {
  test("when given 8 j 8   mBliB8g  imjB8B8  jl  B expect 8j8mBliB8gimjB8B8jlB", () => {
    expect(noSpaces("8 j 8   mBliB8g  imjB8B8  jl  B")).toEqual(
      "8j8mBliB8gimjB8B8jlB"
    );
  });
  test("when given 8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd returns 88Bifk8hB8BB8BBBB888chl8BhBfd", () => {
    expect(noSpaces("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd")).toEqual(
      "88Bifk8hB8BB8BBBB888chl8BhBfd"
    );
  });
  test("when given 8aaaaa dddd r      returns 8aaaaaddddr", () => {
    expect(noSpaces("8aaaaa dddd r     ")).toEqual("8aaaaaddddr");
  });
  test('when given "" returns ', () => {
    expect(noSpaces("")).toEqual("");
  });
});
