/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param matrix char字符型二维数组
 * @param word string字符串
 * @return bool布尔型
 */
function hasPath(matrix, word) {
    // write code here
    // 把路径分开
    let words = word.split('');
    // 空矩阵
    if (!matrix) {
        return false;
    }
    // 遍历矩阵
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            // 通过dfs对比
            if (dfs(matrix, words, i, j, 0)) {
                return true;
            }
        }
    }
    return false;
}

function dfs(matrix, wordArr, i, j, index) {
    // 超出边界&匹配不对
    if (i < 0 || j < 0 || i > matrix.length - 1 || j > matrix[0].length - 1 || matrix[i][j] !== wordArr[index]) {
        return false;
    }
    // 遍历次数与路径长度一样
    if (index === wordArr.length - 1) {
        return true
    }

    // 还原矩阵，防止往回找
    let temp = matrix[i][j]
    matrix[i][j] = "#"
    // 上下左右
    let res = dfs(matrix, wordArr, i + 1, j, index + 1) || dfs(matrix, wordArr, i - 1, j, index + 1) || dfs(matrix, wordArr, i, j + 1, index + 1) || dfs(matrix, wordArr, i, j - 1, index + 1)
    matrix[i][j] = temp
    return res


}

module.exports = {
    hasPath: hasPath
};