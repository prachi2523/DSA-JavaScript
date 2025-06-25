class Node{
    constructor(value){
        this.value=value,
        this.next=null
    }
}

class LinkedList{
    constructor(head=null){
        this.head=head
    }

    inserAtFirst(data){
        const node=new Node(data)
        node.next=this.head
        this.head=node
    }

    inserAtLast(data){
        const node=new Node(data)
        if(!this.head){
            this.head=node
        }

        let tempHead=this.head
        console.log(tempHead,"tempHead")
        while(tempHead.next){
            tempHead=tempHead.next
        }
        tempHead.next=node
    }

    size(){
        let count=0;
        let tempHead=this.head
        while(tempHead){
            count++;
            tempHead=tempHead.next
        }
        return count
    }

    addAt(data,index){
        const node=new Node(data)

        if(index<0||index>this.size()){
            console.error("Invalid index")
            return;
        }

        if(index==0){
            this.inserAtFirst()
            return;
        }

        let tempHead=this.head
        for(let i=0; i<index-1;i++){
            tempHead=tempHead.next
        }
        node.next=tempHead.next
        tempHead.next=node
    }
    removeFirst(){
        if(!this.head){
            return
        }
        this.head=this.head.next
    }

    removeLast(){
        if(!this.head){
            return
        }

        let tempHead=this.head
        while(tempHead?.next?.next){
            tempHead=tempHead.next
        }
        tempHead.next=null
    }

    removeAt(index){

        if(index<0||index>this.size()){
            console.error("Invalid index")
            return;
        }

        if(index==0){
            this.removeFirst()
            return;
        }
        let tempHead=this.head
        for(let i=0; i<index-1;i++){
            tempHead=tempHead.next
        }
        if(tempHead.next){
            tempHead.next=tempHead.next.next
        }
    }

    printList(){
        let tempHead=this.head
        while(tempHead){
            console.log(tempHead.value)
            tempHead=tempHead.next
        }
    }
}


const linkedList=new LinkedList()
const linkedList2=new LinkedList()


linkedList.inserAtFirst(4)
linkedList.inserAtFirst(2)
linkedList.inserAtFirst(3)
linkedList.inserAtFirst(8)
linkedList.inserAtLast(10)


linkedList2.inserAtFirst(4)
linkedList2.inserAtFirst(2)
linkedList2.inserAtFirst(3)
linkedList2.inserAtFirst(8)
linkedList2.inserAtLast(10)


// console.log(linkedList.size(),"SIZE")
// linkedList.printList()

// linkedList.removeFirst();
// linkedList.removeLast();

// console.log(linkedList.size(),"After remove SIZE")

// linkedList.addAt(78,3)

// linkedList.removeAt(2)

linkedList.printList()
console.log("****")
linkedList2.printList()
