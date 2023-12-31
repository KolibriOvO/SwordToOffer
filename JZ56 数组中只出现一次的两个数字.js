/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param array int整型一维数组
 * @return int整型一维数组
 */
function FindNumsAppearOnce(array) {
    // write code here
    let set = new Set()
    array = array.sort((a, b) => a - b)
    for (let i = 0; i < array.length; i++) {
        if (set.has(array[i])) {
            set.delete(array[i])
        } else {
            set.add(array[i])
        }
    }
    return [...set]
}

module.exports = {
    FindNumsAppearOnce: FindNumsAppearOnce
};