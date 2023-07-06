function NumberOf1Between1AndN_Solution(n) {
    // write code here
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    let str = arr.join('')
    let res = str.match(/1/g);
    console.log(str)
    return res ? res.length : 0
}

module.exports = {
    NumberOf1Between1AndN_Solution: NumberOf1Between1AndN_Solution
};
console.log(NumberOf1Between1AndN_Solution(13))