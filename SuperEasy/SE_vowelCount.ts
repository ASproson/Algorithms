export const vowelCount = (str: string): number => {
  return str
    .toLowerCase()
    .split('')
    .filter(
      (c) => c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u'
    ).length;
};
