class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue empty";
        }

        return this.items.shift();
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    firstElement() {
        if (this.isEmpty()) {
            return "Queue empty";
        }

        return this.items[0];
    }

    clear() {
        this.items = [];
    }
}

const queue = new Queue;

console.log("Is empty?: " + queue.isEmpty());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log("Initial queue: " + queue.items)
console.log("Is empty?:" + queue.isEmpty());
console.log("First element: " + queue.firstElement());
console.log("Length: " + queue.size());
console.log("Dequeue: " + queue.dequeue());
console.log("Updated queue " + queue.items)
console.log("Updated size: " + queue.size());