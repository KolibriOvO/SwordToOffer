function ListNode(x) {
    this.val = x;
    this.next = null;
}

function deleteDuplication(pHead) {
    // write code here
    let p = new ListNode(0)
    p.next = pHead
    let pre = p
    let cur = pHead
    while (cur) {
        if (cur.next && cur.val == cur.next.val) {
            cur = cur.next
            while (cur.next && cur.val == cur.next.val) {
                cur = cur.next
            }
            cur = cur.next
            pre.next = cur
        } else {
            pre = cur
            cur = cur.next
        }
    }
    return p.next
}

module.exports = {
    deleteDuplication: deleteDuplication
};