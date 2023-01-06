const swap = (a: unknown, b: unknown) => {
  [a, b] = [b, a];
  return [a, b];
};

module.exports = { swap };
