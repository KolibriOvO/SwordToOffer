/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param str string字符串
 * @param pattern string字符串
 * @return bool布尔型
 */
function match(str, pattern) {
    let regExp = new RegExp('^' + pattern + '$')
    return regExp.test(str)
}

module.exports = {
    match: match
};