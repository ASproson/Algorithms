export const chainedAdding = (x: number): any => {
  let sum = x;

  const innerAdd = (n: number) => {
    if (n) {
      sum += n;
      return innerAdd;
    } else {
      return sum;
    }
  };
  return innerAdd;
};
