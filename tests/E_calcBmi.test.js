"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const E_calcBmi_1 = require("../Easy/E_calcBmi");
describe('calcBmi function', () => {
    it("should return 'Underweight' for a BMI <= 18.5", () => {
        expect((0, E_calcBmi_1.calcBmi)(50, 1.75)).toBe('Underweight');
    });
    it("should return 'Normal' for a BMI between 18.6 and 25.0", () => {
        expect((0, E_calcBmi_1.calcBmi)(70, 1.75)).toBe('Normal');
    });
    it("should return 'Overweight' for a BMI between 25.1 and 30.0", () => {
        expect((0, E_calcBmi_1.calcBmi)(85, 1.75)).toBe('Overweight');
    });
    it("should return 'Obese' for a BMI > 30.0", () => {
        expect((0, E_calcBmi_1.calcBmi)(100, 1.75)).toBe('Obese');
    });
});
