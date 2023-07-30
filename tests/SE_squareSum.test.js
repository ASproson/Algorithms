"use strict";
const { squareSum } = require("../SuperEasy/SE_squareSum");
describe("squareSum()", () => {
    test("when given [1,2] returns 5", () => {
        expect(squareSum([1, 2])).toEqual(5);
    });
    test("when given [0, 3, 4, 5] returns 50", () => {
        expect(squareSum([0, 3, 4, 5])).toEqual(50);
    });
    test("when given [] returns 0", () => {
        expect(squareSum([])).toEqual(0);
    });
});
