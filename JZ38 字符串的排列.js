function Permutation(str) {
    // write code here
    let s = str.split('')
    let res = [];

    function swap(i, j) {
        [s[i], s[j]] = [s[j], s[i]];
    }

    function dfs(p, q) {
        if (p === q) {
            res.push(s.join(''));
            return
        }
        for (let i = p; i <= q; i++) {
            swap(p, i)
            dfs(p + 1, q)
            swap(p, i)
        }
    }

    dfs(0, s.length - 1)
    res = Array.from(new Set(res))
    return res
}

module.exports = {
    Permutation: Permutation
};