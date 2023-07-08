function FindContinuousSequence(sum) {
    // write code here
    let res = []
    let i = 1
    let j = 2
    for (i, j; i < j;) {
        let temp = (i + j) * (j - i + 1) / 2
        if (temp === sum) {
            let tempArr = []
            for (let q = i; q <= j; q++) {
                tempArr.push(q)
            }
            res.push(tempArr)
            i++
        } else if (temp < sum) {
            j++
        } else if (temp > sum) {
            i++
        }
    }
    return res
}

module.exports = {
    FindContinuousSequence: FindContinuousSequence
};