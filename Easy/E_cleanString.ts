export const cleanString = (s: string): string => {
  let newStr: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "#") newStr.push(s[i]);
    if (s[i] === "#") newStr.pop();
  }
  return newStr.join("");
};
