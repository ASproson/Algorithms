"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oddOrEven = void 0;
const oddOrEven = (arr) => {
    if (arr.length < 1)
        return 'even';
    return arr.reduce((a, b) => a + b) % 2 === 0 ? 'even' : 'odd';
};
exports.oddOrEven = oddOrEven;
