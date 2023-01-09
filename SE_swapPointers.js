"use strict";
const swapPointers = (a, b) => {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
};
let a = 5;
let b = "hello";
let [x, y] = swapPointers(a, b);
console.log(x, y);
module.exports = { swapPointers };
