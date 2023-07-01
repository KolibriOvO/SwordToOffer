function TreeLinkNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}

function GetNext(pNode) {
    // write code here
    if (pNode == null) {
        return pNode;
    }
    if (pNode.right !== null) {
        pNode = pNode.right;
        if (pNode.left !== null) {
            pNode = pNode.left;
        }
        return pNode;
    }
    while(pNode.next !== null){
        if(pNode === pNode.next.left){
            pNode = pNode.next;
            return pNode;
        }
        pNode = pNode.next;
    }
}

module.exports = {
    GetNext: GetNext
};