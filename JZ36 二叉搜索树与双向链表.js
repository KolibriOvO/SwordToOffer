/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function Convert(pRootOfTree) {
    // write code here
    let p = null;
    let head = null;

    function dfs(pRootOfTree) {
        if (pRootOfTree === null) {
            return null;
        }
        dfs(pRootOfTree.left)
        if (p === null) {
            head = pRootOfTree;
        } else {
            p.right = pRootOfTree;
        }
        pRootOfTree.left = p;
        p = pRootOfTree;
        dfs(pRootOfTree.right)

    }

    dfs(pRootOfTree)
    return head;
}

module.exports = {
    Convert: Convert
};