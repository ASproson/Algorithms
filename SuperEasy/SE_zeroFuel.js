"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zeroFuel = void 0;
const zeroFuel = ({ distance, mpg, fuelLeft }) => {
    if (fuelLeft * mpg < distance)
        return false;
    return true;
};
exports.zeroFuel = zeroFuel;
