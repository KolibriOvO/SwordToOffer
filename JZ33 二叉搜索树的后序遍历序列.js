function VerifySquenceOfBST(sequence) {
    // write code here
    if (!sequence.length) {
        return false;
    }
    return dfs(sequence)
}

function dfs(sequence) {
    let l = sequence.length;
    if (l < 2) {
        return true;
    }
    let root = sequence[l-1];
    let index = sequence.findIndex((item) => item > root)
    let res = sequence.slice(index,l-1).every(x => x > root)

    if (res) {
        return dfs(sequence.slice(0, index)) && dfs(sequence.slice(index,l-1))
    } else {
        return false;
    }
}

module.exports = {
    VerifySquenceOfBST: VerifySquenceOfBST
};