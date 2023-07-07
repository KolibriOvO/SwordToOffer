function IsContinuous(numbers) {
    // write code here
    let arr = numbers.filter(item => item !== 0)
    arr = arr.sort()
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            return false
        }
    }
    let num0 = 0
    let index = numbers.indexOf(0)
    while (index !== -1) {
        num0++
        index = numbers.indexOf(0, index + 1)
    }

    if (num0 === 0) {
        let arr = numbers.sort()
        return arr[arr.length - 1] - arr[0] === arr.length - 1
    }
    if (num0 === 1) {
        let arr = numbers.sort()
        return arr[arr.length - 1] - arr[1] < arr.length
    }
    if (num0 === 2) {
        let arr = numbers.sort()
        return arr[arr.length - 1] - arr[2] < arr.length
    }
    if (num0 === 3) {
        let arr = numbers.sort()
        return arr[arr.length - 1] - arr[3] < arr.length
    }
    if (num0 === 4) {
        return true
    }
}

module.exports = {
    IsContinuous: IsContinuous
};
console.log(IsContinuous([6, 0, 2, 0, 4]))