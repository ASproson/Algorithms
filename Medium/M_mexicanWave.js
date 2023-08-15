"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mexicanWave = void 0;
const mexicanWave = (str) => {
    let waveArr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ')
            continue;
        const waveChar = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
        waveArr.push(waveChar);
    }
    return waveArr;
};
exports.mexicanWave = mexicanWave;
