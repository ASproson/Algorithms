const { isPangram } = require("../Easy/E_isPangram");

describe("isPangram()", () => {
  test("Expect 'The quick brown fox jumps over the lazy dog.' to be true", () => {
    expect(isPangram("The quick brown fox jumps over the lazy dog.")).toBe(
      true
    );
  });

  test("Expect 'This is not a pangram.' to be false", () => {
    expect(isPangram("This is not a pangram.")).toBe(false);
  });
});
