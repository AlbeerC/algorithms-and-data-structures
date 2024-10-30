class Stack {
    constructor() {
        this.items = []
    }

    isEmpty() {
        return this.items.length === 0
    }

    stack(element) {
        this.items.push(element)
    }

    unstack() {
        if (this.isEmpty()) {
            return 'List is empty'
        } else {
            this.items.pop()
        }
    }

    size() {
        return this.items.length
    }

    lastElement() {
        if (this.isEmpty()) {
            return 'List is empty'
        } else {
            return this.items[this.size() - 1]
        }
    }

    firstElement() {
        if (this.isEmpty()) {
            return 'List is empty'
        } else {
            return this.items[0]
        }
    }

    clear() {
        this.items = []
    }
}

const stack = new Stack

console.log(stack.isEmpty())
stack.stack(20)
stack.stack(4)
console.log(stack.lastElement())
console.log(stack.size())
console.log(stack.firstElement())
console.log(stack.isEmpty())
stack.unstack()
console.log(stack.size())