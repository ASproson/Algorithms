export const doubleChar = (str: string): string => {
  return str
    .split('')
    .map((s) => s + s)
    .join('');
};
