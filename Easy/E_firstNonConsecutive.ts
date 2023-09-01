// find the first element of an array that is not consecutive

export const firstNonConsecutive = (arr: number[]): null | number => {
  for (let i = 0; i < arr.length - 1; i++) {
    let next = arr[i + 1];
    if (arr[i] + 1 === next) {
      continue;
    } else {
      return next;
    }
  }

  return null;
};
