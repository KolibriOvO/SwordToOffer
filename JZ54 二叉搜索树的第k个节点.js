/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param proot TreeNode类
 * @param k int整型
 * @return int整型
 */
function KthNode(proot, k) {
    // write code here
    if (proot === null || k === 0) {
        return -1
    }
    let arr = []

    function dfs(root) {
        if (root === null) {
            return
        }
        dfs(root.left)
        arr.push(root.val)
        dfs(root.right)
    }

    dfs(proot)
    if (k > arr.length) {
        return -1
    }
    return arr[k - 1]
}

module.exports = {
    KthNode: KthNode
};