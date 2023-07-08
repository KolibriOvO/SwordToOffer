function multiply(array) {
    // write code here
    let res = []
    for (let i = 0; i < array.length; i++) {
        let temp = array.concat()
        temp.splice(i, 1)
        let x = 1
        for (let j = 0; j < temp.length; j++) {
            x *= temp[j]
        }
        res.push(x)
    }
    return res
}

module.exports = {
    multiply: multiply
};
console.log(multiply([1, 2, 3, 4, 5]))