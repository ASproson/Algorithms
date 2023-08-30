export const sortAndStar = (s: string[]): string => {
  return s.sort()[0].split('').join('***');
};
