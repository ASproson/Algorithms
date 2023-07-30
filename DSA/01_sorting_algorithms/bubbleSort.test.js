"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bubbleSort_1 = require("./bubbleSort");
describe("bubbleSort()", () => {
    test("when given [1,2,3] returns [1,2,3]", () => {
        expect((0, bubbleSort_1.bubbleSort)([1, 2, 3])).toEqual([1, 2, 3]);
    });
    test("when given [1,3,2] returns [1,2,3]", () => {
        expect((0, bubbleSort_1.bubbleSort)([1, 3, 2])).toEqual([1, 2, 3]);
    });
    test("when given [10,1,3,2] returns [1,2,3,10]", () => {
        expect((0, bubbleSort_1.bubbleSort)([10, 1, 3, 2])).toEqual([1, 2, 3, 10]);
    });
    test("when given [100,10,1,2,20] returns [1,2,10,20,100]", () => {
        expect((0, bubbleSort_1.bubbleSort)([100, 10, 1, 2, 20])).toEqual([1, 2, 10, 20, 100]);
    });
});
