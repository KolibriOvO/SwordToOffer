function ListNode(x) {
    this.val = x;
    this.next = null;
}

function printListFromTailToHead(head) {
    // write code here
    let res = [];

    while (head) {
        res.unshift(head.val);
        head = head.next;
    }
    return res;
}

module.exports = {
    printListFromTailToHead: printListFromTailToHead,
};

