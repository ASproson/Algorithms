// Convert American floors/storeys into European

export const getRealFloor = (n: number): number => {
  if (n <= 0) return n;
  if (n <= 1) return 0;
  if (n < 13) return n - 1;
  return n - 2;
};
