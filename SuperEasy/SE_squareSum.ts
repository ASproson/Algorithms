export const squareSum = (numbers: number[]): number => {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i] * numbers[i];
  }
  return total;
};
