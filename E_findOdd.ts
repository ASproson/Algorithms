// Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times

export const findOdd = (xs: number[]): number => {
  let oddNum = 0;

  for (const num of xs) {
    oddNum ^= num;
  }

  return oddNum;
};
