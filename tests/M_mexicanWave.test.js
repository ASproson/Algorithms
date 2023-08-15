"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const M_mexicanWave_1 = require("../Medium/M_mexicanWave");
describe('mexicanWave()', () => {
    test('when given "hello" returns ["Hello", "hEllo", "heLlo", "helLo", "hellO"]', () => {
        expect((0, M_mexicanWave_1.mexicanWave)('hello')).toEqual([
            'Hello',
            'hEllo',
            'heLlo',
            'helLo',
            'hellO',
        ]);
    });
    test('when given "two words" returns ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]', () => {
        expect((0, M_mexicanWave_1.mexicanWave)('two words')).toEqual([
            'Two words',
            'tWo words',
            'twO words',
            'two Words',
            'two wOrds',
            'two woRds',
            'two worDs',
            'two wordS',
        ]);
    });
    test('when given " gap " returns [" Gap ", " gAp ", " gaP "]', () => {
        expect((0, M_mexicanWave_1.mexicanWave)(' gap ')).toEqual([' Gap ', ' gAp ', ' gaP ']);
    });
});
