export const oddOrEven = (arr: number[]): string => {
  if (arr.length < 1) return 'even';
  return arr.reduce((a, b) => a + b) % 2 === 0 ? 'even' : 'odd';
};
