"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalGrade = void 0;
const finalGrade = (exam, projects) => {
    if (exam > 90 || projects > 10)
        return 100;
    if (exam > 75 && projects > 4)
        return 90;
    if (exam > 50 && projects > 1)
        return 75;
    return 0;
};
exports.finalGrade = finalGrade;
