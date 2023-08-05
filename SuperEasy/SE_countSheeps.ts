export const countSheeps = (arrayOfSheep: (boolean | undefined | null)[]) => {
  return arrayOfSheep.filter((bool) => bool === true).length;
};
