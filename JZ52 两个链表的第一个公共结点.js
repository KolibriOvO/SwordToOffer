/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2) {
    // write code here
    if (!pHead1 || !pHead2) {
        return null
    }
    let p1 = pHead1
    let p2 = pHead2
    while (p1 != p2) {
        if (p1 === null) {
            p1 = pHead2
        } else {
            p1 = p1.next
        }
        if (p2 === null) {
            p2 = pHead1
        } else {
            p2 = p2.next
        }
    }
    return p1
}

module.exports = {
    FindFirstCommonNode: FindFirstCommonNode
};