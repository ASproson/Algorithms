export const bouncingBall = (
  h: number,
  bounce: number,
  window: number
): number => {
  if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) {
    return -1;
  }

  let numberOfTimesBallPassesWindow = 1; // Count the initial fall

  while (h * bounce > window) {
    h *= bounce;
    numberOfTimesBallPassesWindow += 2; // Count both the fall and the bounce
  }

  return numberOfTimesBallPassesWindow;
};
