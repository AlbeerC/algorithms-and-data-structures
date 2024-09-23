class Queue {
    constructor() {
        this.items = []
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    enqueue(element) {
        this.items.push(element)
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'List is empty'
        } else {
            this.items.shift()
        }
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

const queue = new Queue

console.log(queue.isEmpty())
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log("Initial queue", queue.items)
console.log(queue.isEmpty())
console.log(queue.size())
console.log(queue.firstElement())
console.log(queue.lastElement())
queue.dequeue()
console.log(queue.size())
console.log("Final queue", queue.items)