function movingCount(threshold, rows, cols) {
    // write code here
    function getSums(x, y) {
        let sum1 = 0;
        while (x > 0) {
            sum1 += x % 10;
            x = Math.floor(x / 10)
        }
        let sum2 = 0;
        while (y > 0) {
            sum2 += y % 10;
            y = Math.floor(y / 10)
        }

        return sum1 + sum2;
    }

    let visited = []
    let total =0;
    for(let i = 0; i < rows; i++) {
        visited[i] = []
    }


    function dfs(i, j) {
        if (i < 0 || i > rows - 1 || j < 0 || j > cols - 1 || getSums(i, j) > threshold || visited[i][j]) {
            return 0;
        } else {
            total++
            visited[i][j] = true
            dfs(i + 1, j)
            dfs(i, j + 1)
            dfs(i - 1, j)
            dfs(i, j - 1)
        }
    }

    dfs(0, 0)
    return total
}

module.exports = {
    movingCount: movingCount
};