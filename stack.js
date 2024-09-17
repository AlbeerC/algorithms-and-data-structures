class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack empty";
        }

        return this.items.pop();
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    lastElement() {
        if (this.isEmpty()) {
            return "Stack empty";
        }

        return this.items[this.size() - 1];
    }

    clear() {
        this.items = [];
    }
}

const stack = new Stack;
stack.push(30);
stack.push(15);
stack.push(20);
console.log("Initial array: " + stack.items);
console.log("Last element: " + stack.lastElement());
console.log("Size of the array: " + stack.size());
console.log("Delete last element: " + stack.pop());
console.log("Final array: " + stack.items);