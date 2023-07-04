function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function HasSubtree(pRoot1, pRoot2) {
    // write code here
    if(!pRoot1 || !pRoot2){
        return false
    }
    function sameTree(pRoot1, pRoot2) {
        if (!pRoot2) {
            return true;
        } else if (!pRoot1) {
            return false;
        } else if (pRoot1.val !== pRoot2.val) {
            return false;
        }
        return sameTree(pRoot1.left, pRoot2.left) && sameTree(pRoot1.right, pRoot2.right)
    }

    return sameTree(pRoot1, pRoot2) || HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2)
}

module.exports = {
    HasSubtree: HasSubtree
};