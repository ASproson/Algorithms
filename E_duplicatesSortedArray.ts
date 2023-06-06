export const removeDuplicatesSortedArray = (nums: number[]): number => {
  if (!nums) return 0;

  let uniqueValueCounter = 1;
  let heldValue = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== heldValue) {
      uniqueValueCounter++;
      heldValue = nums[i];
      nums[uniqueValueCounter - 1] = heldValue;
    }
  }

  return uniqueValueCounter;
};
