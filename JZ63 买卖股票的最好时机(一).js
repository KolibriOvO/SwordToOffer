/**
 *
 * @param prices int整型一维数组
 * @return int整型
 */
function maxProfit(prices) {
    // write code here
    let max = 0
    if (prices === 0) {
        return max
    }
    let min = prices[0]
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        max = Math.max(max, prices[i] - min)
    }
    return max
}

module.exports = {
    maxProfit: maxProfit
};