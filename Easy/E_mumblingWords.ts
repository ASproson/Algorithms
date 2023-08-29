export const mumblingWords = (s: string): string => {
  let str = '';
  let count = 0;
  s.split('').forEach((e) => {
    count++;
    if (count === 1) {
      str += e;
    } else {
      let repeated = e.repeat(count).toLowerCase();
      let capital = repeated.charAt(0).toUpperCase();
      let remainingLetters = repeated.slice(1);
      str += '-' + capital + remainingLetters;
    }
  });

  return str;
};
