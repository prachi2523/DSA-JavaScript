class MinStack {
    constructor() {
        this.item = []
        this.min = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.item.push(val)
        if (this.min.length == 0 || val < this.min[this.min.length - 1]) {
            this.min.push(val)
        } else {
            this.min.push([this.min.length - 1])
        }
    }

    /**
     * @return {void}
     */
    pop() {
        console.log(this.item)
        console.log(this.min)
        this.item.pop()
        this.min.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.item[this.item.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length - 1]
    }

    // print(){
    //     this.item.join
    // }
}

let minStack = new MinStack();
console.log(minStack.push(-2))
console.log(minStack.push(0))
console.log(minStack.push(-1))
// console.log(minStack.push(4))
console.log(minStack.getMin())
console.log(minStack.top())
console.log(minStack.pop())
console.log(minStack.getMin())
// console.log(minStack.pop())
// console.log(minStack.getMin())