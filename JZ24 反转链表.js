/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
    // write code here
    let pre = null;
    let curr = pHead;
    while (curr) {
        let next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next
    }
    return pre;

}

module.exports = {
    ReverseList: ReverseList
};