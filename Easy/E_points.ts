export const points = (games: string[]): number => {
  let points = 0;

  games.forEach((g) => {
    if (g[0] > g[2]) {
      points += 3;
    } else if (g[0] === g[2]) {
      points++;
    }
  });

  return points;
};
