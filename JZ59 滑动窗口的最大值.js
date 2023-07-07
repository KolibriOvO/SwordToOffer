function maxInWindows(num, size) {
    // write code here
    let res = []
    if (size === 0 || size > num.length) {
        return []
    }
    for (let i = 0; i <= num.length - size; i++) {
        let arr = num.slice(i, i + size)
        res.push(Math.max(...arr))
    }
    return res
}

module.exports = {
    maxInWindows: maxInWindows
};