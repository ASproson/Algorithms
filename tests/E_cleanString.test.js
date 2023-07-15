const { cleanString } = require("../E_cleanString");

describe("cleanString()", () => {
  test('when given "abc#d##c" returns ac', () => {
    expect(cleanString("abc#d##c")).toEqual("ac");
  });
  test('when given "abc####d##c#" returns ""', () => {
    expect(cleanString("abc####d##c#")).toEqual("");
  });
});
