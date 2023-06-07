const { removeDuplicatesSortedArray } = require("../E_duplicatesSortedArray");

describe("removeDuplicatesSortedArray()", () => {
  test("returns 0 when given nothing", () => {
    expect(removeDuplicatesSortedArray()).toEqual(0);
  });
  test("returns [1, 2] when passed [1, 1, 2] and modifies the original array", () => {
    let nums = [1, 1, 2];
    expect(removeDuplicatesSortedArray(nums)).toEqual(2);
    expect(nums.slice(0, 2)).toEqual([1, 2]);
  });
  test("returns [1,2,3,4] when passed [0,0,1,1,1,2,2,3,3,4] and modifies the original array", () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    expect(removeDuplicatesSortedArray(nums)).toEqual(5);
    expect(nums.slice(0, 5)).toEqual([0, 1, 2, 3, 4]);
  });
});
