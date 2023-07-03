/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param array int整型一维数组
 * @return int整型一维数组
 */
function reOrderArray(array) {
    // write code here
    let arr = new Array()
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            arr.push(array[i])
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arr.push(array[i])
        }
    }
    return arr
}

module.exports = {
    reOrderArray: reOrderArray
};