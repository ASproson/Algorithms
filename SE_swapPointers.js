"use strict";
const swapPointers = (a, b) => {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
};
module.exports = { swapPointers };
