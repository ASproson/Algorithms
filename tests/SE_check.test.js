"use strict";
const { check } = require("../SuperEasy/SE_check");
describe("check()", () => {
    test("when given [66, 101], 66 returns true", () => {
        expect(check([66, 101], 66)).toEqual(true);
    });
    test("when given [80, 117, 115, 104, 45], 45 returns true", () => {
        expect(check([80, 117, 115, 104, 45], 45)).toEqual(true);
    });
    test("when given ['t','e','s','t'], 'e' returns !", () => {
        expect(check(["t", "e", "s", "t"], "e")).toEqual(true);
    });
    test("when given ['hello', 'world'], 'false' returns !", () => {
        expect(check(["hello", "world"], "false")).toEqual(false);
    });
});
