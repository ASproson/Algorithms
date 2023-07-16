// There is an array with some numbers. All numbers are equal except for one
// Consider that the arrays might be very large, so consider performance

export const findUnique = (arr: number[]): number => {
  let unique = 0;
  const obj: { [key: number]: number } = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 0;
    }
  }

  for (const key in obj) {
    if (obj[key] === 0) unique = Number(key);
  }
  return unique;
};
