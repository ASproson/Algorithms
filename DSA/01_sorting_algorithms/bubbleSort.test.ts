import { bubbleSort } from "./bubbleSort";

describe("bubbleSort()", () => {
  test("when given [1,2,3] returns [1,2,3]", () => {
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
  });
  test("when given [1,3,2] returns [1,2,3]", () => {
    expect(bubbleSort([1, 3, 2])).toEqual([1, 2, 3]);
  });
  test("when given [10,1,3,2] returns [1,2,3,10]", () => {
    expect(bubbleSort([10, 1, 3, 2])).toEqual([1, 2, 3, 10]);
  });
  test("when given [100,10,1,2,20] returns [1,2,10,20,100]", () => {
    expect(bubbleSort([100, 10, 1, 2, 20])).toEqual([1, 2, 10, 20, 100]);
  });
});
