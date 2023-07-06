function GetUglyNumber_Solution(index) {
    // write code here
    if (index < 7) {
        return index;
    }
    let ugly = []
    ugly[0] = 1
    let i2 = 0, i3 = 0, i5 = 0;
    for (let i = 1; i < index; i++) {
        let cur = Math.min(ugly[i2] * 2, ugly[i3] * 3, ugly[i5] * 5)
        ugly[i] = cur;
        if (cur === ugly[i2] * 2) {
            i2++
        }
        if (cur === ugly[i3] * 3) {
            i3++
        }
        if (cur === ugly[i5] * 5) {
            i5++
        }
    }
    return ugly[index - 1]
}

module.exports = {
    GetUglyNumber_Solution: GetUglyNumber_Solution
};