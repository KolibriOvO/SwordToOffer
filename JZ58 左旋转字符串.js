function LeftRotateString(str, n) {
    // write code here
    if (!str) {
        return ''
    }
    let arr = str.split('')
    for (let i = 0; i < n; i++) {
        let temp = arr.shift()
        arr.push(temp)
    }
    return arr.join('')
}

module.exports = {
    LeftRotateString: LeftRotateString
};