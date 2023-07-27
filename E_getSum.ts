export const getSum = (a: number, b: number): number => {
  if (a === b) return a;

  const n = Math.abs(b - a) + 1;
  const sum = (n * (a + b)) / 2;

  return sum;
};
