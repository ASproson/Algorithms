const { greet } = require("../SuperEasy/SE_greet");

describe("greet()", () => {
  test("when given Ryan returns Hello, Ryan how are you doing today?", () => {
    expect(greet("Ryan")).toEqual("Hello, Ryan how are you doing today?");
  });
  test("when given tnEtcPWlwpsynuhSpLByyCwqhlcN returns tnEtcPWlwpsynuhSpLByyCwqhlcN", () => {
    expect(greet("tnEtcPWlwpsynuhSpLByyCwqhlcN")).toEqual(
      "Hello, tnEtcPWlwpsynuhSpLByyCwqhlcN how are you doing today?"
    );
  });
});
