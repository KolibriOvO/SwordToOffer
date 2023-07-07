/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot) {
    // write code here
    if (pRoot == null) return 0;
    let left = TreeDepth(pRoot.left)
    let right = TreeDepth(pRoot.right)
    return Math.max(left, right) + 1
}

module.exports = {
    TreeDepth: TreeDepth
};