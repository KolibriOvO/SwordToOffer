/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */


/**
 *
 * @param root TreeNode类
 * @param sum int整型
 * @return bool布尔型
 */
function hasPathSum(root, sum) {
    // write code here
    if (!root) {
        return false
    }

    function dfs(root, sum) {
        if (!root) {
            return false
        }
        if (!root.left && !root.right && root.val == sum) {
            return true
        }
        return dfs(root.left, sum - root.val) || dfs(root.right, sum - root.val)
    }

    return dfs(root, sum)
}

module.exports = {
    hasPathSum: hasPathSum
};