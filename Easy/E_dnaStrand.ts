const map: Record<string, string> = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
};

export const dnaStrand = (dna: string): string => {
  return dna
    .split('')
    .map((e) => map[e])
    .join('');
};
