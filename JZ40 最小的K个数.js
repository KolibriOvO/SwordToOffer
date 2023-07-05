function GetLeastNumbers_Solution(input, k) {
    // write code here
    let arr = []
    let temp = input
    for (let i = 0; i < k; i++) {
        let res = Math.min(...input)
        let index = temp.indexOf(res)
        arr.push(temp.splice(index, 1))
    }
    return arr

}

module.exports = {
    GetLeastNumbers_Solution: GetLeastNumbers_Solution
};