// Write a function removeDuplicates that takes in an array of integers and removes any duplicates. The function should return a new array with the duplicates removed

const removeDuplicates = (nums: number[]) => {
  const map: { [key: number]: number } = {};

  for (const i of nums) {
    map[i] ? null : (map[i] = i);
  }

  return Object.values(map);
};

module.exports = { removeDuplicates };

// Space O(n) as the map will most values in the array (constant)
// Time O(n) as we must traverse the entire array
