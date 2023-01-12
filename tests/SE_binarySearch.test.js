const { binarySearch } = require("../SE_binarySearch");

describe("binarySearch", () => {
  test("finds the target value in the array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 6;
    const expected = 5;
    expect(binarySearch(arr, target)).toEqual(expected);
  });

  test("returns -1 if the target value is not in the array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 11;
    const expected = -1;
    expect(binarySearch(arr, target)).toEqual(expected);
  });

  test("finds the target value in the array with negative numbers", () => {
    const arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
    const target = -2;
    const expected = 3;
    expect(binarySearch(arr, target)).toEqual(expected);
  });
});
