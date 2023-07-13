const exponentialDigit = (n: number, p: number): number => {
  const array = String(n).split("");
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    let cur = Number(array[i]) ** (p + i);
    sum += cur;
  }

  return sum % n ? -1 : sum / n;
};

module.exports = { exponentialDigit };

// Split n into a string so we can map over that array
// Store current value of array[i] to the power of p + i, add to sum
// If sum % n has remainders, return -1 else return sum / 2
// exponentialDigit(89, 1)
// 8 ** p + i === 8 ** 0 ┤ 9 ** p + i === 9 ** 1
// 8^1 + 9^2; sum = 8 + 81 === 89
// 89 % 89 === 0, no remainders, k exists
