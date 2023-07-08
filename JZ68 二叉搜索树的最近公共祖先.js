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
 * @param root TreeNode类
 * @param p int整型
 * @param q int整型
 * @return int整型
 */
function lowestCommonAncestor(root, p, q) {
    // write code here
    if (root == null) {
        return null
    }
    if (p < root.val && q < root.val) {
        return lowestCommonAncestor(root.left, p, q)
    } else if (p > root.val && q > root.val) {
        return lowestCommonAncestor(root.right, p, q)
    } else {
        return root.val
    }
}

module.exports = {
    lowestCommonAncestor: lowestCommonAncestor
};