function FirstNotRepeatingChar(str) {
    // write code here
    let map = {}
    for (let i = 0; i < str.length; i++) {
        if (map[str[i]]) {
            map[str[i]].count++
        } else {
            map[str[i]] = {count: 1, index: i}
        }
    }
    let values = Object.values(map)
    for (let i = 0; i < values.length; i++) {
        if (values[i].count === 1) {
            return values[i].index
        }
    }
    return -1
}

module.exports = {
    FirstNotRepeatingChar: FirstNotRepeatingChar
};