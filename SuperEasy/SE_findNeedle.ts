export const findNeedle = (haystack: string[]): string => {
  const index = haystack.indexOf('needle');
  return `found the needle at position ${index}`;
};
