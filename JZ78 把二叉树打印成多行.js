/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot) {
    // write code here
    let res = []

    function dfs(root, level) {
        if (root === null) {
            return
        }
        if (!res[level]) {
            res[level] = []
        }
        res[level].push(root.val)

        dfs(root.left, level + 1)
        dfs(root.right, level + 1)
    }

    dfs(pRoot, 0)
    return res
}

module.exports = {
    Print: Print
};