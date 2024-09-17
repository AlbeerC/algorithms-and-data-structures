class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    Node(element) {
        return {
            element: element,
            next: null
        }
    }

    append(element) {
        const node = this.Node(element);

        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }   

        this.size++
    }

    find(position) {
        if (position < 0 || position > this.size) {
            return "Position is not valid";
        }

        if (position === 0) {
            return this.head.element;
        }

        let index = 0;
        let current = this.head;
        while (index++ < position) {
            current = current.next
        }
        return current.element;
    }

    insert(position, element) {
        if (position < 0 || position > this.size) {
            return "Position is not valid"
        }

        let newNode = this.Node(element)

        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
        }

        let index = 0;
        let previous;
        let current = this.head;
        while(index++ < position) {
            previous = current;
            current = current.next;
        }

        newNode.next = current;
        previous.next = newNode;

        this.size++;
    }

    remove(position) {
        if (position < 0 || position > this.size) {
            return "Position is not valid";
        }

        let current = this.head;
        
        if (position === 0) {
            return this.head = current.next;
        }
        
        let index = 0;
        let previous;
        while (index++ < position) {
            previous = current;
            current = current.next;
        }

        previous.next = current.next;
        this.size--;
    }

    print() {
        if (this.head === null) {
            return "List is empty";
        }

        let current = this.head;
        let listElements = "";
        while (current) {
            listElements += current.element + " - ";
            current = current.next;
        }
        
        return listElements + "null";
    }
}

const list = new LinkedList;

console.log(list.print())
list.append(12);
list.append(15);
list.append(20);
list.append(27);
console.log(list.print())
console.log(list.find(3))
list.insert(2, 10)
console.log(list.print())
list.remove(1)
console.log(list.print())
console.log(list.find(2))