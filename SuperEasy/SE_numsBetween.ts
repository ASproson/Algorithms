export const numsBetween = (a: number, b: number): number[] => {
  let numArr = [];
  while (a <= b) {
    numArr.push(a);
  }
  return numArr;
};
