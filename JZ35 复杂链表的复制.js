function RandomListNode(x) {
    this.label = x;
    this.next = null;
    this.random = null;
}

function Clone(pHead) {
    // write code here
    if (!pHead) {
        return null;
    }
    let pHead1 = pHead;
    while (pHead1) {
        let node = new RandomListNode(pHead1.label)
        node.next = pHead1.next;
        pHead1.next = node;
        pHead1 = pHead1.next.next
    }
    let pHead2 = pHead;
    while (pHead2) {
        if (pHead2.random) {
            pHead2.next.random = pHead2.random
        } else {
            pHead2.next.random = null
        }
        pHead2 = pHead2.next.next
    }
    let p = pHead.next;
    let root = new RandomListNode(0)
    let q = root
    while (p) {
        q.next = p
        q = q.next
        if (p.next) {
            p = p.next.next
        } else {
            break
        }
    }
    q.next = null
    return root.next

}

module.exports = {
    Clone: Clone
};