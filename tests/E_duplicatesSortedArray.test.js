const { removeDuplicatesSortedArray } = require("../E_duplicatesSortedArray");

describe("removeDuplicatesSortedArray()", () => {
  test("returns 0 when given nothing", () => {
    expect(removeDuplicatesSortedArray()).toEqual(0);
  });
  test("returns [1, 2] when passed [1, 1, 2]", () => {
    let nums = [1, 1, 2];
    expect(removeDuplicatesSortedArray(nums)).toEqual(2);
    // expect(nums).toEqual([1, 2]);
  });
  test("returns [1,2,3,4] when passed [0,0,1,1,1,2,2,3,3,4]", () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    expect(removeDuplicatesSortedArray(nums)).toEqual(5);
  });
});
