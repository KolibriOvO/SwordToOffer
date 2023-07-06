/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param n int整型
 * @return int整型
 */
function findNthDigit(n) {
    // write code here
    let count = 1;
    let bottom = 0;
    top = 10;
    while (n > (top - bottom) * count) {
        n -= (top - bottom) * count;
        count += 1
        bottom = top;
        top *= 10
    }
    let num = parseInt(n / count) + bottom
    let r = n % count
    return num.toString()[r]
}

module.exports = {
    findNthDigit: findNthDigit
};