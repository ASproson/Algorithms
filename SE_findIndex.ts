const findIndex = (arr: number[], num: number) => {
  return arr.indexOf(num);
};

module.exports = { findIndex };

// Time: O(n) as we potentially traverse entire array
// Space: O(1) as only using provided values

// Alternatives: binary search(O log n), however, would need a sorted array
// Alternatives: store values and their indexes in a map to look up index value in O(1) time, but will take O(n) space
