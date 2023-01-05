const { alphabetReplace } = require("../E_alphabetReplace");

describe("alphabetReplace()", () => {
  it("returns a string", () => {
    expect(typeof alphabetReplace("code")).toEqual("string");
  });
  it("returns 3 15 4 5 when passed code", () => {
    expect(alphabetReplace("code")).toEqual("3 15 4 5");
  });
  it("returns 14 15 18 20 8 3 15 4 5 18 19 when passed Northcoders", () => {
    expect(alphabetReplace("Northcoders")).toEqual(
      "14 15 18 20 8 3 15 4 5 18 19"
    );
  });
  it("returns 5 24 16 5 18 20 16 18 15 7 18 1 13 13 9 14 7 when passed expert programming", () => {
    expect(alphabetReplace("expert programming")).toEqual(
      "5 24 16 5 18 20 16 18 15 7 18 1 13 13 9 14 7"
    );
  });
});
