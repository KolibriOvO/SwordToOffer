/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串
 * @return int整型
 */
function StrToInt(s) {
    // write code here
    let number = parseInt(s, 10)
    if (isNaN(number)) return 0
    if (number < Math.pow(-2, 31)) return Math.pow(-2, 31)
    if (number > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1
    return number
}

module.exports = {
    StrToInt: StrToInt
};