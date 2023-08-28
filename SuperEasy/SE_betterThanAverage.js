"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.betterThanAverage = void 0;
const betterThanAverage = (classPoints, yourPoints) => {
    const totalPoints = classPoints.reduce((a, b) => a + b);
    const avg = totalPoints / classPoints.length;
    return yourPoints > avg ? true : false;
};
exports.betterThanAverage = betterThanAverage;
