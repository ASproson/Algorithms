export const alternateCase = (s: string): string => {
  let newStr = '';

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === char.toUpperCase()) {
      newStr += char.toLowerCase();
    } else if (char === char.toLowerCase()) {
      newStr += char.toUpperCase();
    } else {
      newStr += char;
    }
  }

  return newStr;
};
