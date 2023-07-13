const { isTriangle } = require("../M_isTriangle");

describe("isTriangle", () => {
  it("returns false when passed an uneven triangle", () => {
    expect(isTriangle(7, 2, 2)).toEqual(false);
  });
  it("returns true when passed a valid triangle", () => {
    expect(isTriangle(1, 2, 2)).toEqual(true);
  });
  it("returns false when passed an invalid triangle", () => {
    expect(isTriangle(-1, 2, 2)).toEqual(false);
  });
});
