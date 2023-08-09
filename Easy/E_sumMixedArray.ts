// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers

export const sumMixedArray = (arr: any[]): number => {
  return arr.reduce((a, b) => Number(a) + Number(b));
};
