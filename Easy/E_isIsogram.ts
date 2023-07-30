// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case

export const isIsogram = (str: string): boolean => {
  if (str.length === 0) return true;
  const unique = [...new Set(str.toLowerCase())];
  return unique.length === str.length ? true : false;
};
