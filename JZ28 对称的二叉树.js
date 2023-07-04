/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot) {
    // write code here
    if (!pRoot) {
        return true;
    }
    return sameTree(Mirror(pRoot.left), pRoot.right);
}

function Mirror(pRoot) {
    // write code here
    if (!pRoot) {
        return null;
    }
    let temp = pRoot.left;
    pRoot.left = pRoot.right;
    pRoot.right = temp;
    Mirror(pRoot.left);
    Mirror(pRoot.right);
    return pRoot;
}

function sameTree(pRoot1, pRoot2) {
    if (!pRoot1 && !pRoot2) {
        return true;
    } else if (!pRoot1 || !pRoot2) {
        return false;
    } else if (pRoot1.val !== pRoot2.val) {
        return false;
    }
    return sameTree(pRoot1.left, pRoot2.left) && sameTree(pRoot1.right, pRoot2.right)
}

module.exports = {
    isSymmetrical: isSymmetrical
};