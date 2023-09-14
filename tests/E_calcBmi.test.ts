import { calcBmi } from '../Easy/E_calcBmi';

describe('calcBmi function', () => {
  it("should return 'Underweight' for a BMI <= 18.5", () => {
    expect(calcBmi(50, 1.75)).toBe('Underweight');
  });

  it("should return 'Normal' for a BMI between 18.6 and 25.0", () => {
    expect(calcBmi(70, 1.75)).toBe('Normal');
  });

  it("should return 'Overweight' for a BMI between 25.1 and 30.0", () => {
    expect(calcBmi(85, 1.75)).toBe('Overweight');
  });

  it("should return 'Obese' for a BMI > 30.0", () => {
    expect(calcBmi(100, 1.75)).toBe('Obese');
  });
});
