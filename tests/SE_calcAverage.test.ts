const { calcAverage } = require("../SuperEasy/SE_calcAverage");

describe("calcAverage()", () => {
  test("when given [1,1,1,1] return 1", () => {
    expect(calcAverage([1, 1, 1, 1])).toEqual(1);
  });
  test("when given [1,2,3] return 2", () => {
    expect(calcAverage([1, 2, 3])).toEqual(2);
  });
  test("when given [1,2,3,4] return 2.5", () => {
    expect(calcAverage([1, 2, 3, 4])).toEqual(2.5);
  });
  test("when given [10, 20, 30, 40] return 25", () => {
    expect(calcAverage([10, 20, 30, 40])).toEqual(25);
  });
});
