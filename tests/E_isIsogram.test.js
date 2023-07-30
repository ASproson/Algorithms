const { isIsogram } = require("../Easy/E_isIsogram");

describe("isIsogram()", () => {
  test("returns true when given Dermatoglyphics", () => {
    expect(isIsogram("Dermatoglyphics")).toEqual(true);
  });
  test("returns true when given isogram", () => {
    expect(isIsogram("isogram")).toEqual(true);
  });
  test("returns false when given aba", () => {
    expect(isIsogram("aba")).toEqual(false);
  });
  test("returns false when given moOse", () => {
    expect(isIsogram("moOse")).toEqual(false);
  });
  test("returns false when given isIsogram", () => {
    expect(isIsogram("isIsogram")).toEqual(false);
  });

  test("returns true when given empty string", () => {
    expect(isIsogram("")).toEqual(true);
  });
});
