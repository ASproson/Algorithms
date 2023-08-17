export const findEvenIndex = (arr: number[]): number => {
  let prefixSum = new Array(arr.length);
  prefixSum[0] = arr[0];

  // Calculate the prefix sum array
  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = arr[i] + prefixSum[i - 1];
  }

  // Loop through the array to find an index with equal left and right sums
  for (let i = 0; i < arr.length; i++) {
    // Compare the sum of elements on the left side with the sum on the right side
    if (prefixSum[i] === prefixSum[arr.length - 1] - prefixSum[i] + arr[i]) {
      // Found the index where sums are equal
      return i;
    }
  }

  // No equal index found
  return -1;
};
