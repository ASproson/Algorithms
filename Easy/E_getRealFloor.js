"use strict";
// Convert American floors/storeys into European
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRealFloor = void 0;
const getRealFloor = (n) => {
    if (n <= 0)
        return n;
    if (n <= 1)
        return 0;
    if (n < 13)
        return n - 1;
    return n - 2;
};
exports.getRealFloor = getRealFloor;
