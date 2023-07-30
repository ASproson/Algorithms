const { deadFish } = require("../Easy/E_deadFish");

describe("deadFish()", () => {
  test('expect "iiisdoso" to be [8, 64', () => {
    expect(deadFish("iiisdoso")).toEqual([8, 64]);
  });
  test('expect "iiisxxxdoso" to be [8, 64', () => {
    expect(deadFish("iiisxxxdoso")).toEqual([8, 64]);
  });
});
