function ReverseSentence(str) {
    // write code here
    let arr = str.split(' ')
    return arr.reverse().join(' ')
}

module.exports = {
    ReverseSentence: ReverseSentence
};