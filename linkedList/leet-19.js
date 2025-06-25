var removeNthFromEnd = function(head, n) {
    let reverseList = null;
    let currentNode = head
    while (currentNode) {
        let nextNode = currentNode.next
        currentNode.next = prev;
        prev = currentNode;
        currentNode = nextNode
    }
    let tempHead=head
    for(let i=0; i<n-1;i++){
        tempHead=tempHead.next
    }
    if(tempHead.next){
        tempHead.next=tempHead.next.next
    }
};