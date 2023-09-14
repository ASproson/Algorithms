"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcBmi = void 0;
function calcBmi(weight, height) {
    const res = calculateBmi(weight, height);
    if (res <= 18.5)
        return 'Underweight';
    if (res <= 25.0)
        return 'Normal';
    if (res <= 30.0)
        return 'Overweight';
    return 'Obese';
}
exports.calcBmi = calcBmi;
const calculateBmi = (w, h) => {
    return w / (h * h);
};
