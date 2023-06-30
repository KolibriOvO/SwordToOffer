/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串
 * @return string字符串
 */
function replaceSpace(s) {
    // write code here
    let re = " "
    let result = s.replaceAll(re, '%20')
    return result;
}

module.exports = {
    replaceSpace: replaceSpace
};

console.log(replaceSpace("We Are Happy"))