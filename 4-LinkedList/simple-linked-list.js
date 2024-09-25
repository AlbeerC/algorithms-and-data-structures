class LinkedList {
    
    constructor() {
        this.head = null
        this.size = 0
    }

    Node(val) {
        return {
            val,
            next: null
        }
    }

    isEmpty() {
        return this.head === null
    }

    insertAtHead(val) {
        const newNode = this.Node(val)

        if (this.isEmpty()) {
            this.head = newNode
        } else {
            let current = this.head
            this.head = newNode
            newNode.next = current
        }

        this.size++
    }

    insertAtTail(val) {
        const newNode = this.Node(val)

        if (this.isEmpty()) {
            this.head = newNode
        } else {
            let current = this.head

            while (current.next) {
                current = current.next
            }

            current.next = newNode
            this.size++
        }
    }

    insertAtPosition(val, pos) {
        const newNode = this.Node(val)

        if (pos < 0 || pos > this.size) {
            return 'Position not valid'
        }

        if (pos === 0) {
            let current = this.head
            this.head = newNode
            newNode.next = current
            return
        }

        let current = this.head
        let index = 0
        let previous

        while (index++ < pos) {
            previous = current
            current = current.next
        }

        previous.next = newNode
        newNode.next = current
        this.size++
    }

    deleteHead() {
        if (this.isEmpty()) {
            return 'List is empty'
        } else {
            let current = this.head
            this.head = current.next
            this.size--
        }
    }

    deleteTail() {
        if (this.isEmpty()) {
            return 'List is empty' 
        } else if (!this.head.next){
            this.head = null
            return
        } else {
            let current = this.head

            while (current.next.next) {
                current = current.next
            }

            current.next = null
            this.size--
        }
    }

    deleteAtPosition(pos) {
        if (pos < 0 || pos > this.size) {
            return 'Position not valid'
        }

        if (pos === 0) {
            let current = this.head
            this.head = current.next
            return
        }

        let current = this.head
        let index = 0
        let previous

        while (index++ < pos) {
            previous = current
            current = current.next
        }

        previous.next = current.next
        this.size--
    }

    findByPosition(pos) {
        if (pos < 0 || pos >= this.size) {
            return 'Position not valid'
        }

        if (pos === 0) {
            return this.head.val
        }

        let current = this.head
        let index = 0

        while (index++ < pos) {
            current = current.next
        }

        return current.val
    }

    print() {
        if (this.isEmpty()) { return 'List is empty' }

        let current = this.head
        let elements = ''

        while (current) {
            elements += current.val + " - "
            current = current.next
        }

        return elements + 'null'

    }
}


const list = new LinkedList()

list.insertAtHead(5)
console.log(`Insert 5 at head: ${list.print()}`)
list.insertAtHead(3)
console.log(`Insert 3 at head: ${list.print()}`)
list.insertAtTail(7)
console.log(`Insert 7 at tail: ${list.print()}`)
list.deleteHead()
console.log(`Delete head: ${list.print()}`)
list.deleteTail()
console.log(`Delete tail: ${list.print()}`)
list.insertAtHead(1)
list.insertAtTail(2)
list.insertAtTail(3)
list.insertAtTail(5)
list.insertAtTail(6)
console.log(list.print())
list.insertAtPosition(4, 3)
console.log(list.print())
list.deleteAtPosition(4)
console.log(list.print())
console.log(list.findByPosition(0))
console.log(list.findByPosition(2))
console.log(list.findByPosition(4))
console.log(list.findByPosition(5))