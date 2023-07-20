"use strict";
const { removeChar } = require("../SE_removeChar");
describe("removeChar()", () => {
    test("when given eloquent return loquen", () => {
        expect(removeChar("eloquent")).toEqual("loquen");
    });
    test("when given country return ountr", () => {
        expect(removeChar("country")).toEqual("ountr");
    });
    test("when given person return erso", () => {
        expect(removeChar("person")).toEqual("erso");
    });
    test("when given place return lac", () => {
        expect(removeChar("place")).toEqual("lac");
    });
});
