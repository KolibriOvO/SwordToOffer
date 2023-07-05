/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber) {
    // write code here
    let sum = 0;
    let res = [];
    let arr = [];

    function dfs(root) {
        if (root) {
            sum += root.val;
            arr.push(root.val)
            if (sum === expectNumber && !root.left && !root.right) {
                res.push([...arr])
            }else {
                dfs(root.left)
                dfs(root.right)
            }
            arr.pop()
            sum-=root.val
        }
    }
    dfs(root)
    return res;
}

module.exports = {
    FindPath: FindPath
};