/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param str string字符串
 * @return bool布尔型
 */
function isNumeric( str ) {
    // write code here
    let str1 = str.trim()
    if(str1 === "0") {
        return true;
    } else {
        return Number(str1)
    }
}

module.exports = {
    isNumeric: isNumeric
};