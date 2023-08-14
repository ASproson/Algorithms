"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidSmiley = void 0;
const isValidSmiley = (arr) => {
    let sum = 0;
    arr.forEach((str) => {
        const validEyes = str[0] === ':' || str[0] === ';';
        const validMouth = str[1] === ')' || str[1] === 'D';
        const validNose = (str[1] === '-' || str[1] === '~') && (str[2] === ')' || str[2] === 'D');
        if (validEyes && (validMouth || validNose)) {
            sum++;
        }
    });
    return sum;
};
exports.isValidSmiley = isValidSmiley;
