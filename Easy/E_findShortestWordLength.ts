export const shortestWordLength = (str: string): number => {
  let split = str.split(' ');
  let shortestWord = split[0].length;
  for (let i = 1; i < split.length; i++) {
    if (split[i].length < shortestWord) {
      shortestWord = split[i].length;
    }
  }
  return shortestWord;
};
