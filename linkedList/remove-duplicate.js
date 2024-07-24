var deleteDuplicates = function(head) {
    let node=new ListNode(0);
    let list=node
    let arr=[];
    let tempHead=head;
    while(tempHead){
        if(arr.indexOf(tempHead.val)==-1){
            arr.push(tempHead.val)
        }
        tempHead=tempHead?.next
    }
    let i=0;

     while(i<arr.length){
        list.next=new ListNode(arr[i])
        list=list.next
        i++;
    }
    return node.next
};