// export const oddOrEven = (arr: number[]): string => {
//   if (arr.length < 1) return 'even';
//   return arr.reduce((a, b) => a + b) % 2 === 0 ? 'even' : 'odd';
// };

const sumArray = (arr: number[]): number => {
  return arr.reduce((a, b) => a + b);
};

export const oddOrEven = (arr: number[]): string => {
  return sumArray(arr) % 2 === 0 ? 'even' : 'odd';
};
