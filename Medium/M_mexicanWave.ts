export const mexicanWave = (str: string): string[] => {
  let waveArr: string[] = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;
    const waveChar = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
    waveArr.push(waveChar);
  }

  return waveArr;
};
