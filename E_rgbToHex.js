"use strict";
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbToHex = void 0;
const rgbToHex = (r, g, b) => {
    const handleHexRounding = (num) => {
        return Math.min(Math.max(num, 0), 255);
    };
    const handleHexConversion = (r, g, b) => {
        let str = "";
        str += handleHexRounding(r).toString(16).padStart(2, "0");
        str += handleHexRounding(g).toString(16).padStart(2, "0");
        str += handleHexRounding(b).toString(16).padStart(2, "0");
        return str.toUpperCase();
    };
    return handleHexConversion(r, g, b);
};
exports.rgbToHex = rgbToHex;
