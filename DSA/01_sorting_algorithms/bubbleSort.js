"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            let current = arr[j];
            let next = arr[j + 1];
            if (current > next) {
                arr[j] = next;
                arr[j + 1] = current;
            }
        }
    }
    return arr;
};
exports.bubbleSort = bubbleSort;
// Time complexity is O(n^2). As the size of the input array increaes, the running time of the algorithm grows quadratically
// Due to needing nested loops, time complexity is proportional the square of the input size
// Outer loop iterates n-1 times. This loop controls the number of passes through the array
// For each loop through the largest (or smallest) element will bubble to its correct position
// Inner loop iterates n-1 times in the first pass, n-2 in the second pass etc. In the last pass it iterates only once
// This loop compares adjacent elements in the array and swaps them if they are in the wrong order
