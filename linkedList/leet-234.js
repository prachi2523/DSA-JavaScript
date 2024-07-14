/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var isPalindrome = function(head) {
    let currentNode=head;
    let str1=""
    let str2=""
  while(currentNode){
      str1=str1+currentNode.val;
      str2=currentNode.val+str2
      currentNode=currentNode.next
  }
  return str1==str2
};