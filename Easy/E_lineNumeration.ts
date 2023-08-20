export const lineNumeration = (arr: string[]): string[] => {
  return arr.map((e, idx) => `${idx + 1}: ${e}`);
};
