/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead) {
    // write code here
    while (pHead !== null) {
        if (pHead.flag) {
            return pHead;
        } else {
            pHead.flag = true;
            pHead = pHead.next
        }
    }

}

module.exports = {
    EntryNodeOfLoop: EntryNodeOfLoop
};