/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param grid int整型二维数组
 * @return int整型
 */
function maxValue(grid) {
    // write code here
    let dp = []
    let row = grid.length
    let col = grid[0].length
    for (let i = 0; i < row; i++) {
        dp[i] = []
        for (let j = 0; j < col; j++) {
            dp[i][j] = 0
        }
    }
    dp[0][0] = grid[0][0]
    for (let i = 1; i < row; i++) {
        dp[i][0] = grid[i][0] + dp[i - 1][0]
    }
    for (let j = 1; j < col; j++) {
        dp[0][j] = grid[0][j] + dp[0][j - 1]
    }
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            dp[i][j] = Math.max(grid[i][j] + dp[i - 1][j], grid[i][j] + dp[i][j - 1])
        }
    }
    return dp[row - 1][col - 1]
}

module.exports = {
    maxValue: maxValue
};