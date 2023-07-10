/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot) {
    // write code here
    if (pRoot === null) {
        return true
    }
    let left = getTreeDepth(pRoot.left)
    let right = getTreeDepth(pRoot.right)
    if (Math.abs(left - right) > 1) {
        return false
    }
    let leftTree = IsBalanced_Solution(pRoot.left)
    let rightTree = IsBalanced_Solution(pRoot.right)
    return leftTree && rightTree
}

function getTreeDepth(root) {
    if (root === null) {
        return 0
    }
    let left = getTreeDepth(root.left)
    let right = getTreeDepth(root.right)
    return Math.max(left, right) + 1
}

module.exports = {
    IsBalanced_Solution: IsBalanced_Solution
};