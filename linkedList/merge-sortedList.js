// var mergeTwoLists = function (list1, list2) {
//     let node = new Node(0)
//     let tempArr = []
//     let list = node
//     while (list1) {
//         tempArr.push(list1.value)
//         list1 = list1.next
//     }
//     while (list2) {
//         tempArr.push(list2.value)
//         list2 = list2.next
//     }
//     let sorted = tempArr.sort((a, b) => a - b)
//     let i = 0;
//     while (i < sorted.length) {
//         list.next = new Node(sorted[i])
//         list = list.next
//         i++;
//     }
//     node.next;
// };

class Node {
    constructor(value) {
        this.val = value,
            this.next = null
    }
}

function mergeTwoLists(list1, list2) {
    const list = new Node(-1)
    let temp = list
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            temp.next = list1
            list1 = list1.next
            temp = temp.next
        } else {
            temp.next = list2
            list2 = list2.next
            temp = temp.next
        }
    }

    while (list1 !== null) {
        temp.next = list1.val
        list1 = list1.next
        temp = temp.next
    }

    while (list2 !== null) {
        temp.next = list2.val
        list2 = list2.next
        temp = temp.next
    }

    return list.next
}

const head = new Node(-9)
head.next = new Node(3)
// head.next.next = new Node(4)

const head2 = new Node(5)
head2.next = new Node(7)
// head2.next.next = new Node(5)

const m = mergeTwoLists(head, head2)
console.log("ANS", m)