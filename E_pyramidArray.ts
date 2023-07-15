// Write a function that when given a number >= 0, returns an Array of ascending length subarrays
// pyramid(1) => [ [1] ] ┤ pyramid(1) => [ [1] ]

export const pyramidArray = (n: number): number[][] => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let temp = [];
    let j = i;
    while (j >= 0) {
      temp.push(1);
      j--;
    }
    arr.push(temp);
  }
  return arr;
};
