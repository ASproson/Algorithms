const { matrixDeterminant } = require("../Hard/H_matrixDeterminant");

const m1 = [
  [1, 3],
  [2, 5],
];
const m2 = [
  [2, 5, 3],
  [1, -2, -1],
  [1, 3, 4],
];

describe("matrixDeterminant()", () => {
  test("when given [[1]] it returns 1", () => {
    expect(matrixDeterminant([[1]])).toEqual(1);
  });
  test("when given m1 it returns -1", () => {
    expect(matrixDeterminant(m1)).toEqual(-1);
  });
  test("when given m2 it returns -20", () => {
    expect(matrixDeterminant(m2)).toEqual(-20);
  });
});
