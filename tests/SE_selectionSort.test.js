const { selectionSort } = require("../SE_SelectionSort");

describe("selectionSort()", () => {
  test("sort array of numbers in ascending order", () => {
    expect(selectionSort([5, 3, 6, 2, 10])).toEqual([2, 3, 5, 6, 10]);
  });

  test("sort array of numbers in ascending order", () => {
    expect(selectionSort([4, 6, 8, 2, 5])).toEqual([2, 4, 5, 6, 8]);
  });

  test("sort already sorted array", () => {
    expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sort array of negative numbers", () => {
    expect(selectionSort([-3, -5, -1, -10, -2])).toEqual([-10, -5, -3, -2, -1]);
  });

  test("sort empty array", () => {
    expect(selectionSort([])).toEqual([]);
  });
});
