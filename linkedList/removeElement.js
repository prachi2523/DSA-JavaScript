var removeElements = function(head, val) {
    let node=new Node(0);
    let list=node
    let tempHead=head;
    let arr=[]
    while(tempHead){
     arr.push(tempHead.value)
     tempHead=tempHead.next
    }
    arr=arr.filter(value=>value!==val)
    let i=0;
    while(i<arr.length){
        list.next=new Node(arr[i])
        list=list.next
        i++;
    }
    
    return node.next
};