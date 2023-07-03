function NumberOf1(n) {
    // write code here
    return (n >>> 0).toString(2).split(1).length - 1;
}

module.exports = {
    NumberOf1: NumberOf1
};