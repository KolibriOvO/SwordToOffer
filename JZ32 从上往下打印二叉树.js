function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

let arr = [];
let queue = [];

function PrintFromTopToBottom(root) {
    // write code here
    if (root === null) {
        return arr;
    }
    arr.push(root.val);
    queue.push(root);
    while (queue.length > 0) {
        let node = queue.shift();
        if (node.left) {
            arr.push(node.left.val)
            queue.push(node.left)
        }
        if (node.right) {
            arr.push(node.right.val)
            queue.push(node.right)
        }
    }
    return arr;
}

module.exports = {
    PrintFromTopToBottom: PrintFromTopToBottom
};