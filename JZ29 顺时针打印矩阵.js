function printMatrix(matrix) {
    // write code here
    if (matrix.length === 0) return [];
    let arr = [];
    let borderX = matrix.length - 1;
    let borderY = matrix[0].length - 1;
    let left = 0;
    let top = 0;
    while (true) {
        for (let i = left; i <= borderY; i++) {
            arr.push(matrix[top][i])
        }
        top++;
        if (top > borderX) break;
        for (let i = top; i <= borderX; i++) {
            arr.push(matrix[i][borderY]);
        }
        borderY--
        if (borderY < left) break;
        for (let i = borderY; i >= left; i--) {
            arr.push(matrix[borderX][i])
        }
        borderX--;
        if (borderX < top) break;
        for (let i = borderX; i >= top; i--) {
            arr.push(matrix[i][left]);
        }
        left++;
        if (left > borderY) break;

    }

    return arr;
}

module.exports = {
    printMatrix: printMatrix
};