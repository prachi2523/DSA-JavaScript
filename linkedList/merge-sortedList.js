var mergeTwoLists = function(list1, list2) {
    let node=new Node(0)
    let tempArr=[]
    let list=node
   while(list1){
    tempArr.push(list1.value)
    list1=list1.next
   }
   while(list2){
    tempArr.push(list2.value)
    list2=list2.next
   }
    let sorted=tempArr.sort((a,b)=>a-b)
    let i=0;
    while(i<sorted.length){
        list.next=new Node(sorted[i])
        list=list.next
        i++;
    }
    node.next;
};