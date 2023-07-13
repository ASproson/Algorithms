const { phoneNumber } = require("../SE_phoneNumber");

describe("phoneNumber()", () => {
  test("[1, 2, 3, 4, 5, 6, 7, 8, 9, 0] to be (123) 456-7890", () => {
    expect(phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual(
      "(123) 456-7890"
    );
  });
  test("[1, 1, 1, 1, 1, 1, 1, 1, 1, 1] to be (111) 111-1111", () => {
    expect(phoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual(
      "(111) 111-1111"
    );
  });
});
