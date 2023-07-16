const { rgbToHex } = require("../E_rgbToHex");

describe("rgbToHex()", () => {
  test("it returns 0,0,0 when passed 000000", () => {
    expect(rgbToHex(0, 0, 0)).toEqual("000000");
  });
  test("it returns 0, 0, -20 when passed 000000", () => {
    expect(rgbToHex(0, 0, -20)).toEqual("000000");
  });
  test("it returns 300, 255, 255 when passed FFFFFF", () => {
    expect(rgbToHex(300, 255, 255)).toEqual("FFFFFF");
  });
  test("it returns 173, 255, 47 when passed ADFF2F", () => {
    expect(rgbToHex(173, 255, 47)).toEqual("ADFF2F");
  });
});
