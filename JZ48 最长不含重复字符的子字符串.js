/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串
 * @return int整型
 */
function lengthOfLongestSubstring(s) {
    // write code here
    if (!s) {
        return 0
    }
    if (s.length === 1) {
        return 1
    }
    let temp = 0;
    let k = 1
    let max = 0

    for (let i = 1; i < s.length; i++) {
        if (s.slice(temp, i).indexOf(s[i]) >= 0) {
            temp = temp + 1 + s.slice(temp, i).indexOf(s[i])
            i = temp
            k = 1
        } else {
            k++
        }
        max = Math.max(max, k)
    }
    return max
}

module.exports = {
    lengthOfLongestSubstring: lengthOfLongestSubstring
};