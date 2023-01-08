const { isSubsequence } = require("../E_isSubsequence");

describe("isSubsequence()", () => {
  it("returns a boolean", () => {
    expect(typeof isSubsequence("one", "two")).toEqual("boolean");
  }),
    it("returns false when passed a && an empty string", () => {
      expect(isSubsequence("a", "")).toEqual(false);
    }),
    it("returns true when passed abc, ahbgdc", () => {
      expect(isSubsequence("abc", "ahbgdc")).toEqual(true);
    }),
    it("returns false when passed axv, ahbgdc", () => {
      expect(isSubsequence("axv", "ahbgdc")).toEqual(false);
    }),
    it("returns false when passed axvvvvvvvvvvv, ahbgdc", () => {
      expect(isSubsequence("axvvvvvvvvvvv", "ahbgdc")).toEqual(false);
    });
});
