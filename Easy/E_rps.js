"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rps = void 0;
const rps = (p1, p2) => {
    if (p1 === p2)
        return 'Draw!';
    const winningConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper',
    };
    // Access the object value using p1 and check if it matches the p2 string
    // p2 === 'scissors', p1 === 'rock', winningConditions[p1] === 'scissors'
    if (winningConditions[p1] === p2) {
        return 'Player 1 won!';
    }
    return 'Player 2 won!';
};
exports.rps = rps;
