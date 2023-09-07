"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const E_convertHumanYearsToPets_1 = require("../Easy/E_convertHumanYearsToPets");
describe('humanYearsCatYearsDogYears', () => {
    it('should return [1, 15, 15] for 1 human year', () => {
        expect((0, E_convertHumanYearsToPets_1.convertHumanYearsToPets)(1)).toEqual([1, 15, 15]);
    });
    it('should return [2, 24, 24] for 2 human years', () => {
        expect((0, E_convertHumanYearsToPets_1.convertHumanYearsToPets)(2)).toEqual([2, 24, 24]);
    });
    it('should return [10, 56, 64] for 10 human years', () => {
        expect((0, E_convertHumanYearsToPets_1.convertHumanYearsToPets)(10)).toEqual([10, 56, 64]);
    });
});
