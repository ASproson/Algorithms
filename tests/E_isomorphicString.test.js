const { isomorphicString } = require("../Easy/E_isomorhpicString");

describe("isomorphicString()", () => {
  it("returns a boolean", () => {
    expect(typeof isomorphicString("str", "str")).toEqual("boolean");
  }),
    it("returns true when passed egg && add", () => {
      expect(isomorphicString("egg", "add")).toEqual(true);
    }),
    it("returns true when passed foo && bar", () => {
      expect(isomorphicString("foo", "bar")).toEqual(false);
    }),
    it("returns true when passed paper && title", () => {
      expect(isomorphicString("paper", "title")).toEqual(true);
    }),
    it("returns false when passed badc && baba", () => {
      expect(isomorphicString("badc", "baba")).toEqual(false);
    });
});
