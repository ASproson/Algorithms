"use strict";
const swap = (a, b) => {
    [a, b] = [b, a];
    return [a, b];
};
module.exports = { swap };
