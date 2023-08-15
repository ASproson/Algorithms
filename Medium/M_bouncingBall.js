"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bouncingBall = void 0;
const bouncingBall = (h, bounce, window) => {
    if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) {
        return -1;
    }
    let numberOfTimesBallPassesWindow = 1; // Count the initial fall
    while (h * bounce > window) {
        h *= bounce;
        numberOfTimesBallPassesWindow += 2; // Count both the fall and the bounce
    }
    return numberOfTimesBallPassesWindow;
};
exports.bouncingBall = bouncingBall;
