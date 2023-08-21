export const highestWord = (str: string): string => {
  const words = str.split(' ');

  let highestScore = 0;
  let highestScoreWord = '';

  for (const word of words) {
    let wordScore = 0;
    for (const char of word) {
      wordScore += char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }

    if (
      wordScore > highestScore ||
      (wordScore === highestScore &&
        word.indexOf(highestScoreWord) < word.indexOf(highestScoreWord))
    ) {
      highestScore = wordScore;
      highestScoreWord = word;
    }
  }

  return highestScoreWord;
};
