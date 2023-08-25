"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.busStops = void 0;
const busStops = (stops) => {
    let on = 0;
    let off = 0;
    let flattened = stops.flat(Infinity);
    for (let i = 0; i < flattened.length; i++) {
        if (i % 2 === 0) {
            on += Number(flattened[i]);
        }
        else {
            off += Number(flattened[i]);
        }
    }
    return on - off;
};
exports.busStops = busStops;
