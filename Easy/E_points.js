"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.points = void 0;
const points = (games) => {
    let points = 0;
    games.forEach((g) => {
        if (g[0] > g[2]) {
            points += 3;
        }
        else if (g[0] === g[2]) {
            points++;
        }
    });
    return points;
};
exports.points = points;
