/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param numbers int整型一维数组
 * @return int整型
 */
function duplicate(numbers) {
    // write code here
    let set = new Set();
    for (let i = 0; i < numbers.length; i++) {
        if (set.has(numbers[i])) {
            return numbers[i];
        } else {
            set.add(numbers[i]);
        }
    }
    return -1;
}

module.exports = {
    duplicate: duplicate,
};



console.log(duplicate([2,3,1,0,2,5,3]))