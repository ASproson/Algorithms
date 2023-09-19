interface FuelParams {
  distance: number;
  mpg: number;
  fuelLeft: number;
}

export const zeroFuel = ({ distance, mpg, fuelLeft }: FuelParams): boolean => {
  if (fuelLeft * mpg < distance) return false;
  return true;
};
