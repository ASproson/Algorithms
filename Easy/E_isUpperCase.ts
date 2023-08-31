// export const isUpperCase = (str: string) => {
//   return str
//     .split('')
//     .map((_, idx) => str.charCodeAt(idx) < 91)
//     .includes(false)
//     ? false
//     : true;
// };

export const isUpperCase = (str: string) => {
  return str === str.toUpperCase();
};
