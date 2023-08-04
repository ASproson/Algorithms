export const reverseWords = (str: string): string => {
  const words = str.split(" ");
  const reversedWords = words.map((word) => word.split("").reverse().join(""));
  return reversedWords.join(" ");
};
