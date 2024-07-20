/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let node=new ListNode(0)
    let currentList=node
    let carry=0;
    
    while(l1||l2||carry>0){
        let val1=l1?l1.val:0
        let val2=l2?l2.val:0
        let sum=val1+val2+carry;

        carry=Math.floor(sum/10);
        sum=sum%10;

         currentList.next=new ListNode(sum)
         currentList=currentList.next

        if(l1)l1=l1?.next
        if(l2)l2=l2?.next
};
return node.next;
}