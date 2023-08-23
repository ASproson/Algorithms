export const numsBetween = (a: number, b: number): number[] => {
  // let numArr = [];
  // while (a <= b) {
  //   numArr.push(a);
  // }
  // return numArr;
  return Array.from({ length: b - a + 1 }, (_, idx) => a + idx);
};
