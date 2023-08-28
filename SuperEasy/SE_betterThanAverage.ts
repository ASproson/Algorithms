// export const betterThanAverage = (
//   classPoints: number[],
//   yourPoints: number
// ): boolean => {
//   const totalPoints = classPoints.reduce((a, b) => a + b);
//   const avg = totalPoints / classPoints.length;
//   return yourPoints > avg ? true : false;
// };

export const betterThanAverage = (
  classPoints: number[],
  yourPoints: number
): boolean => {
  return yourPoints > getAverage(classPoints);
};

const getSum = (array: number[]): number => {
  return array.reduce((a, b) => a + b);
};

const getAverage = (array: number[]): number => {
  return getSum(array) / array.length;
};
