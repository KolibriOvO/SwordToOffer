/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param array int整型一维数组
 * @return int整型一维数组
 */
function reOrderArrayTwo(array) {
    // write code here
    let odd = []
    let even = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2) {
            odd.push(array[i])
        } else {
            even.push(array[i])
        }
    }
    return [...odd, ...even]
}

module.exports = {
    reOrderArrayTwo: reOrderArrayTwo
};