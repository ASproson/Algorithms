const {
  longestConsecutiveString,
} = require("../Medium/M_longestConsecutiveString");

describe("longestConsecutiveString()", () => {
  test("when passed [zone, abigail, theta, form, libe, zas], 2; returns abigailtheta", () => {
    expect(
      longestConsecutiveString(
        ["zone", "abigail", "theta", "form", "libe", "zas"],
        2
      )
    ).toEqual("abigailtheta");
  });
  test("when passed [ejjjjmmtthh,zxxuueeg,aanlljrrrxx,dqqqaaabbb, oocccffuucccjjjkkkjyyyeehh], 1; returns oocccffuucccjjjkkkjyyyeehh", () => {
    expect(
      longestConsecutiveString(
        [
          "ejjjjmmtthh",
          "zxxuueeg",
          "aanlljrrrxx",
          "dqqqaaabbb",
          "oocccffuucccjjjkkkjyyyeehh",
        ],
        1
      )
    ).toEqual("oocccffuucccjjjkkkjyyyeehh");
  });
  test("when passed [it,wkppv,ixoyx, 3452, zzzzzzzzzzzz], 3 returns ixoyx3452zzzzzzzzzzzz", () => {
    expect(
      longestConsecutiveString(
        ["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"],
        3
      )
    ).toEqual("ixoyx3452zzzzzzzzzzzz");
  });
});
