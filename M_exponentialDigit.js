"use strict";
const exponentialDigit = (n, p) => {
    const array = String(n).split("");
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let cur = Number(array[i]) ** (p + i);
        sum += cur;
    }
    return sum % n ? -1 : sum / n;
};
module.exports = { exponentialDigit };
