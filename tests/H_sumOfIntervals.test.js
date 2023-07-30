"use strict";
const { sumOfIntervals } = require("../H_sumOfIntervals");
describe("sumOfIntervals()", () => {
    test("when given [[1,5]] it returns 4", () => {
        expect(sumOfIntervals([[1, 5]])).toEqual(4);
    });
    test("when given [[1,5], [6, 10]] it returns 8", () => {
        expect(sumOfIntervals([
            [1, 5],
            [6, 10],
        ])).toEqual(8);
    });
    test("when given [[1,5], [1,5]] it returns 4", () => {
        expect(sumOfIntervals([
            [1, 5],
            [1, 5],
        ])).toEqual(4);
    });
    test("when given [[1, 4], [7, 10], [3, 5]] it returns 7", () => {
        expect(sumOfIntervals([
            [1, 4],
            [7, 10],
            [3, 5],
        ])).toEqual(7);
    });
    test("when given [[-1e9, 1e9]] it returns 2e9", () => {
        expect(sumOfIntervals([[-1e9, 1e9]])).toEqual(2e9);
    });
    test("when given [[0, 20], [-1e8, 10], [30, 40]] it returns 1e8 + 30", () => {
        expect(sumOfIntervals([
            [0, 20],
            [-1e8, 10],
            [30, 40],
        ])).toEqual(1e8 + 30);
    });
});
