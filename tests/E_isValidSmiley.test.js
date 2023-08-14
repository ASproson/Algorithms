"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const E_isValidSmiley_1 = require("../Easy/E_isValidSmiley");
describe('isValidSmiley()', () => {
    test('when given [:D, :~), ;-D, :)] returns 4', () => {
        expect((0, E_isValidSmiley_1.isValidSmiley)([':D', ':~)', ';~D', ':)'])).toEqual(4);
    });
    test('when given [":)",":(",":D",":O",":;"] returns 2', () => {
        expect((0, E_isValidSmiley_1.isValidSmiley)([':)', ':(', ':D', ':O', ':;'])).toEqual(2);
    });
    test('when given [";]", ":[", ";*", ":$", ";-D"] returns 1', () => {
        expect((0, E_isValidSmiley_1.isValidSmiley)([';]', ':[', ';*', ':$', ';-D'])).toEqual(1);
    });
});
