function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function Serialize(pRoot) {
    // write code here
    let arr = [];
    let queue = [];
    if (pRoot === null) {
        return '';
    }
    arr.push(pRoot.val);
    queue.push(pRoot);
    while (queue.length) {
        let node = queue.shift();
        if (node.left) {
            arr.push(node.left.val)
            queue.push(node.left)
        } else {
            arr.push("#")
        }
        if (node.right) {
            arr.push(node.right.val)
            queue.push(node.right)
        } else {
            arr.push("#")
        }
    }
    return arr.toString();
}

function Deserialize(s) {
    // write code here
    if (s === '') {
        return null;
    }
    let sArr = s.split(',');
    let rootVal = sArr.shift();
    let root = new TreeNode(rootVal);
    let queue = [root];
    while (sArr.length) {
        const node = queue.shift();
        const nodeLeftVal = sArr.shift();
        const nodeRightVal = sArr.shift();
        if (nodeLeftVal !== '#') {
            node.left = new TreeNode(nodeLeftVal);
            queue.push(node.left)
        }
        if (nodeRightVal !== '#') {
            node.right = new TreeNode(nodeRightVal);
            queue.push(node.right)
        }
    }

    return root;

}

module.exports = {
    Serialize: Serialize,
    Deserialize: Deserialize
};