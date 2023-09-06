export const sumUpToNumber = (num: number) => {
  let sum = 0;
  let i = 0;
  while (i < num) {
    i++;
    sum += i;
  }
  return sum;
};
