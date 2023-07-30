const { isPalindrome } = require("../Easy/E_isPalindrome");

describe("isPalindrome()", () => {
  it("returns a boolean", () => {
    expect(typeof isPalindrome("racecar")).toEqual("boolean");
  }),
    it("returns true when passed racecar", () => {
      expect(isPalindrome("racecar")).toEqual(true);
    }),
    it("returns true when passed A man, a plan, a canal, Panama!", () => {
      expect(isPalindrome("A man, a plan, a canal, Panama!")).toEqual(true);
    }),
    it("returns true when passed Never odd or even.", () => {
      expect(isPalindrome("Never odd or even.")).toEqual(true);
    }),
    it("returns false when passed FALSE.", () => {
      expect(isPalindrome("FALSE")).toEqual(false);
    });
});
