"use strict";
// Nested array represents people on the bus ([[10,0],[3,5],[5,8]]) === 5)
// arr[0] is current number on the bus, arr[1] is people leaving the bus
// What is the total number of people on the bus at the end?
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
