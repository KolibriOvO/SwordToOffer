function ListNode(x) {
    this.val = x;
    this.next = null;
}

function Merge(pHead1, pHead2) {
    // write code here
    let l = 0;
    let res = new ListNode(-1)
    let p = res;
    while (pHead1 && pHead2) {
        if (pHead1.val < pHead2.val) {
            p.next = pHead1;
            pHead1 = pHead1.next;
        } else {
            p.next = pHead2;
            pHead2 = pHead2.next;
        }
        p = p.next
    }
    p.next = pHead1 || pHead2;
    return res.next;
}


module.exports = {
    Merge: Merge
};