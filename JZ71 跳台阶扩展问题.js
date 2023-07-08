function jumpFloorII(number) {
    // write code here
    let dp = new Array(number + 1).fill(0)
    dp[0] = 1
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[i - j]
        }
    }
    return dp[number]
}

module.exports = {
    jumpFloorII: jumpFloorII
};