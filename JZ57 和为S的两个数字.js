function FindNumbersWithSum(array, sum) {
    // write code here
    let left = 0
    let right = array.length - 1
    while (left < right) {
        if (array[left] + array[right] < sum) {
            left++
        } else if (array[left] + array[right] > sum) {
            right--
        } else {
            return [array[left], array[right]]
        }
    }
    return []
}

module.exports = {
    FindNumbersWithSum: FindNumbersWithSum
};