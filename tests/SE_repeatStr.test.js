"use strict";
const { repeatStr } = require("../SuperEasy/SE_repeatStr");
describe("repeatStr()", () => {
    test("when given 2, str; it returns strstr", () => {
        expect(repeatStr(2, "str")).toEqual("strstr");
    });
    test("when given 5, repeat; it returns repeatrepeatrepeatrepeatrepeat", () => {
        expect(repeatStr(5, "repeat")).toEqual("repeatrepeatrepeatrepeatrepeat");
    });
    test("when given 3, dash; it returns dashdashdash", () => {
        expect(repeatStr(3, "dash")).toEqual("dashdashdash");
    });
});
