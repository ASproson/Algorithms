// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array

export const deadFish = (data: string): number[] => {
  let num = 0;
  let arr: number[] = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "i") num++;
    if (data[i] === "d") num--;
    if (data[i] === "s") num *= num;
    if (data[i] === "o") arr.push(num);
  }
  return arr;
};
