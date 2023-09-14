export function calcBmi(weight: number, height: number): string {
  const res = calculateBmi(weight, height);
  if (res <= 18.5) return 'Underweight';
  if (res <= 25.0) return 'Normal';
  if (res <= 30.0) return 'Overweight';
  return 'Obese';
}

const calculateBmi = (w: number, h: number): number => {
  return w / (h * h);
};
