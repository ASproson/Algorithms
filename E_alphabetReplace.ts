// Implement a function that accepts a string of any length, and replaces each letter within each word with the corresponding index that that letter has in the alphabet. You must have a space between each index number, and do NOT need to account extra for spaces between words.

const alphabetReplace = (str: string): string => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (const word of str.split(" ")) {
    for (const letter of word) {
      result += alphabet.indexOf(letter.toLowerCase()) + 1 + " ";
    }
    result = result.trim() + " ";
  }
  return result.trim();
};

module.exports = { alphabetReplace };

// Time complexity is O(n2) as we need to interact with element within the array twice
// Space complexity is O(n) because the size of the result string is proportional to the size of the input string
