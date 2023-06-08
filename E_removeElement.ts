export const removeElement = (nums: number[], val: number): number => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

// Time complexity is O(n) as we have to traverse the entire array to ensure all the deletions occur
// Space complexity is O(1) as it uses a constant amount of space as modify the array in place
