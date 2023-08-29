// export const mumblingWords = (s: string): string => {
//   let str = '';
//   let count = 0;
//   s.split('').forEach((e) => {
//     count++;
//     if (count === 1) {
//       str += e;
//     } else {
//       let repeated = e.repeat(count).toLowerCase();
//       let capital = repeated.charAt(0).toUpperCase();
//       let remainingLetters = repeated.slice(1);
//       str += '-' + capital + remainingLetters;
//     }
//   });

//   return str;
// };

export const mumblingWords = (s: string): string => {
  const parts = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();
    const repeatedChar = char.repeat(i + 1);
    parts.push(repeatedChar.charAt(0).toUpperCase() + repeatedChar.slice(1));
  }

  return parts.join('-');
};
