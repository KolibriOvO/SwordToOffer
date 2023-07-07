function LastRemaining_Solution(n, m) {
    // write code here
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(i)
    }
    while (arr.length > 1) {
        for (let j = 0; j < m - 1; j++) {
            arr.push(arr.shift())
        }
        arr.shift()
    }
    return arr.join('')
}

module.exports = {
    LastRemaining_Solution: LastRemaining_Solution
};