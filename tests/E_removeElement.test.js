const { removeElement } = require("../Easy/E_removeElement");
// const { removeDuplicates } = require("../E_removeDuplicates");

describe("removeElement()", () => {
  it("returns a number", () => {
    const res = removeElement([1, 1, 2], 2);
    expect(typeof res).toBe("number");
  });
  it("removes all instances of the passed number from the array in place", () => {
    const nums = [3, 2, 2, 3];
    const val = 3;
    removeElement(nums, val);
    expect(nums.slice(0, 2)).toEqual([2, 2]);
    expect(nums).toHaveLength(2);
  });
  it("removes all instances of the passed number from the array in place", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;
    const res = removeElement(nums, val);
    expect(nums.slice(0, 5)).toEqual([0, 1, 3, 0, 4]);
    expect(nums).toHaveLength(5);
  });
});
