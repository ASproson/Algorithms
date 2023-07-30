"use strict";
// Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix
Object.defineProperty(exports, "__esModule", { value: true });
exports.matrixDeterminant = void 0;
const matrixDeterminant = (m) => {
    if (m.length === 1) {
        return m[0][0];
    }
    else if (m.length === 2) {
        return m[0][0] * m[1][1] - m[0][1] * m[1][0];
    }
    else {
        let sum = 0;
        for (let j = 0; j < m.length; j++) {
            const submatrix = [];
            for (let row = 1; row < m.length; row++) {
                const subrow = [];
                for (let col = 0; col < m[row].length; col++) {
                    if (col !== j) {
                        subrow.push(m[row][col]);
                    }
                }
                submatrix.push(subrow);
            }
            const submatrixDet = (0, exports.matrixDeterminant)(submatrix);
            if (j % 2 === 0) {
                sum += m[0][j] * submatrixDet;
            }
            else {
                sum -= m[0][j] * submatrixDet;
            }
        }
        return sum;
    }
};
exports.matrixDeterminant = matrixDeterminant;
