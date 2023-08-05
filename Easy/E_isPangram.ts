export const isPangram = (phrase: string): boolean => {
  if (phrase.length < 26) return false;
  const uniqueLettersSet = new Set(phrase.toLowerCase().match(/[a-z]/g));
  return uniqueLettersSet.size === 26 ? true : false;
};
