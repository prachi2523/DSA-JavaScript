var middleNode = function(head) {
    let tempHead=head;
    let size=0;
    while(tempHead){
        size++
        tempHead=tempHead.next
    }

    let mid=Math.floor(size/2);
    let i=0;
    let node=head;
    while(i<mid){
        node=node.next
        i++;
    }
    return node;
};