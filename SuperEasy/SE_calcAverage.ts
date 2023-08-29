// export const calcAverage = (arr: number[]): number => {
//   if (arr.length === 0) return 0;
//   return arr.reduce((a, b) => a + b) / arr.length;
// };

const sumArray = (arr: number[]): number => {
  return arr.reduce((a, b) => a + b);
};

const getAverage = (arr: number[]): number => {
  return sumArray(arr) / arr.length;
};

export const calcAverage = (arr: number[]): number => {
  return getAverage(arr);
};
