export const betterThanAverage = (
  classPoints: number[],
  yourPoints: number
): boolean => {
  const totalPoints = classPoints.reduce((a, b) => a + b);
  const avg = totalPoints / classPoints.length;
  return yourPoints > avg ? true : false;
};
