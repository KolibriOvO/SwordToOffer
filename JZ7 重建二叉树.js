function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function reConstructBinaryTree(pre, vin) {
    // write code here
    if (pre.length === 0) {
        return null;
    }
    let rootvalue = pre[0];
    let index = vin.indexOf(rootvalue);
    let leftVin = vin.slice(0, index)
    let rightVin = vin.slice(index + 1)
    let leftPre = pre.slice(1, leftVin.length + 1)
    let rightPre = pre.slice(leftVin.length + 1)
    let root = new TreeNode(rootvalue);
    root.left = reConstructBinaryTree(leftPre, leftVin)
    root.right = reConstructBinaryTree(rightPre, rightVin)
    return root;
}

module.exports = {
    reConstructBinaryTree: reConstructBinaryTree
};

console.log(reConstructBinaryTree([1,2,3,4,5,6,7],[3,2,4,1,6,5,7]))