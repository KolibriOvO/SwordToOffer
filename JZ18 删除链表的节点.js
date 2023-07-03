/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @param val int整型
 * @return ListNode类
 */
function deleteNode(head, val) {
    // write code here
    if (head.val === val) {
        return head.next;
    } else {
        head.next = deleteNode(head.next, val)
        return head;
    }

}

module.exports = {
    deleteNode: deleteNode
};