const swapPointers = (a: unknown, b: unknown): unknown[] => {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
};

module.exports = { swapPointers };
