/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var reverseList = function (head) {
    let prev = null;
    let currentNode = head
    while (currentNode) {
        let nextNode = currentNode.next
        currentNode.next = prev;
        prev = currentNode;
        currentNode = nextNode
    }
    return prev
};