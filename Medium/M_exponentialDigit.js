"use strict";
// Given a positive integer n and a positive integer p, we want to find a positive integer k
// If it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n
// (89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// (92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
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
// Split n into a string so we can map over that array
// Store current value of array[i] to the power of p + i, add to sum
// If sum % n has remainders, return -1 else return sum / 2
// exponentialDigit(89, 1)
// 8 ** p + i === 8 ** 0 ┤ 9 ** p + i === 9 ** 1
// 8^1 + 9^2; sum = 8 + 81 === 89
// 89 % 89 === 0, no remainders, k exists
