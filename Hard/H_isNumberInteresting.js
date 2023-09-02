"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumberInteresting = void 0;
const everyDigitIsTheSameNumber = (numberString, firstNumber) => {
    return numberString.every((e) => e === firstNumber) ? 2 : 0;
};
const digitFollowedByAllZeroes = (numberString) => {
    const numberStringCopy = [...numberString];
    numberStringCopy.shift();
    return numberStringCopy.every((e) => e === '0') ? 2 : 0;
};
const numbersAreSequential = (numberString) => {
    for (let i = 1; i < numberString.length; i++) {
        let curr = Number(numberString[i]);
        let prev = Number(numberString[i - 1]);
        if (prev + 1 === curr || prev - 1 === curr) {
            continue;
        }
        else {
            return 0;
        }
    }
    return 2;
};
const isNumberInteresting = (n, awesomePhrases) => {
    if (n <= 99)
        return 0;
    const numberString = String(n).split('');
    const firstNumber = numberString[0];
    if (everyDigitIsTheSameNumber(numberString, firstNumber) === 2)
        return 2;
    if (digitFollowedByAllZeroes(numberString) === 2)
        return 2;
    if (numbersAreSequential(numberString) === 2)
        return 2;
    return 0;
};
exports.isNumberInteresting = isNumberInteresting;
