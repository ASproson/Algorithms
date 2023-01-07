const removeDuplicates = (nums: number[]) => {
  const map: { [key: number]: number } = {};

  for (const i of nums) {
    map[i] ? null : (map[i] = i);
  }

  return Object.values(map);
};

module.exports = { removeDuplicates };

// Space O(n) as the map will contain every value in the array
// Time O(n) as we must traverse the entire array
