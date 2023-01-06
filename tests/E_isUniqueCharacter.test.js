const { isUniqueCharacter } = require("../E_isUniqueCharacter");

describe("isUniqueCharacter()", () => {
  it("returns a boolean", () => {
    expect(typeof isUniqueCharacter("abc")).toBe("boolean");
  }),
    it("returns true when passed abcde", () => {
      expect(isUniqueCharacter("abcde")).toEqual(true);
    }),
    it("returns true when passed ABCDE", () => {
      expect(isUniqueCharacter("ABCDE")).toEqual(true);
    }),
    it("returns true when passed 1234567890", () => {
      expect(isUniqueCharacter("1234567890")).toEqual(true);
    }),
    it("returns false when passed abcdea", () => {
      expect(isUniqueCharacter("abcdea")).toEqual(false);
    }),
    it("returns false when passed banana", () => {
      expect(isUniqueCharacter("banana")).toEqual(false);
    });
});
