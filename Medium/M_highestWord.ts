export const highestWord = (str: string): string => {
  const words = str.split(' ');

  let highestScore = 0;
  let highestScoreWord = '';

  for (const word of words) {
    let currentWordScore = 0;
    for (const char of word) {
      currentWordScore += char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }

    if (
      currentWordScore > highestScore ||
      (currentWordScore === highestScore &&
        word.indexOf(highestScoreWord) < word.indexOf(highestScoreWord))
    ) {
      highestScore = currentWordScore;
      highestScoreWord = word;
    }
  }

  return highestScoreWord;
};
