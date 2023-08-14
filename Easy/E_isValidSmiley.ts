export const isValidSmiley = (arr: string[]): number => {
  let sum = 0;

  arr.forEach((str) => {
    const validEyes = str[0] === ':' || str[0] === ';';
    const validMouth = str[1] === ')' || str[1] === 'D';
    const validNose =
      (str[1] === '-' || str[1] === '~') && (str[2] === ')' || str[2] === 'D');

    if (validEyes && (validMouth || validNose)) {
      sum++;
    }
  });

  return sum;
};
