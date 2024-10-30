class PriorityQueue {
    
    constructor() {
        this.heap = []
    }
    
    parentIndex(index) {
        return Math.floor((index - 1) / 2)
    }
    
    leftChildIndex(index) {
        return 2 * index + 1
    }
    
    rightChildIndex(index) {
        return 2 * index + 2
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    // Insertar un nuevo valor con prioridad en el heap
    enqueue(value, priority) {
        const node = { value, priority }
        this.heap.push(node)
        this.siftUp(this.heap.length - 1)
    }

    siftUp(index) {
        let parent = this.parentIndex(index)

        while(index > 0 && this.heap[index].priority < this.heap[parent].priority) {
            this.swap(index, parent)
            index = parent
            parent = this.parentIndex(index)
        }
    }

    // Eliminar y retornar el valor con mayor prioridad (el más pequeño en un min heap)
    dequeue() {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop().value

        const min = this.heap[0].value
        this.heap[0] = this.heap.pop()
        this.siftDown(0)
        return min
    }

    siftDown(index) {
        let smallest = index
        const left = this.leftChildIndex(index)
        const right = this.rightChildIndex(index)

        if (left < this.heap.length && this.heap[left].priority < this.heap[smallest].priority) {
            smallest = left
        }

        if (right < this.heap.length && this.heap[right].priority < this.heap[smallest].priority) {
            smallest = right
        }

        if (smallest !== index) {
            this.swap(index, smallest)
            this.siftDown(smallest)
        }
    }

    peek() {
        return this.heap.length === 0 ? null : this.heap[0]
    }

    isEmpty() {
        return this.heap.length === 0
    }
}

const pq = new PriorityQueue()
pq.enqueue(10, 2)
pq.enqueue(5, 3)
pq.enqueue(14, 1)
pq.enqueue(20, 5)
pq.enqueue(2, 4)

console.log("Queue:", pq.heap)
console.log("Peek:", pq.peek())
// Sale de la cola el elemento con mayor prioridad (14)
console.log("Dequeue:", pq.dequeue())
console.log("Queue:", pq.heap)