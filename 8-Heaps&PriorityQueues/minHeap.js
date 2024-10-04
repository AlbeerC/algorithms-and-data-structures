class MinHeap {

    constructor() {
        this.heap = []
    }

    // Obtener el índice del padre de un nodo
    parentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    // Obtener el índice del hijo izquierdo de un nodo
    leftChildIndex(index) {
        return 2 * index + 1
    }

    // Obtener el índice del hijo derecho de un nodo
    rightChildIndex(index) {
        return 2 * index + 2
    }

    // Intercambiar dos elementos en el heap
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    // Insertar un nuevo valor en el heap
    insert(value) {
        this.heap.push(value) // Añadir el valor al final
        this.siftUp(this.heap.length - 1) // Reorganizar hacia arriba
    }

    // Reorganizar hacia arriba para mantener el heap ordenado
    siftUp(index) {
        let parent = this.parentIndex(index)

        // Si el valor actual es menor que el valor del padre, intercambiar
        while(index > 0 && this.heap[index] < this.heap[parent]) {
            this.swap(index, parent)
            index = parent
            parent = this.parentIndex(index)
        }
    }

    // Eliminar el valor más pequeño del heap (raíz)
    removeMin() {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop()

        const min = this.heap[0]
        // Reemplazar la raíz con el último elemento
        this.heap[0] = this.heap.pop()
        this.siftDown(0) // Reorganizar hacia abajo
        return min
    }

    siftDown(index) {
        let smallest = index
        const left = this.leftChildIndex(index)
        const right = this.rightChildIndex(index)

        // Comparar el nodo actual con su hijo izquierdo
        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left
        }

        // Comparar el nodo actual con su hijo derecho
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right
        }

        // Si el valor más pequeño está en uno de los hijos, intercambiar y continuar
        if (smallest !== index) {
            this.swap(index, smallest)
            this.siftDown(smallest)
        }
    }

    // Obtener el elemento más pequeño
    peek() {
        return this.heap.length === 0 ? null : this.heap[0]
    }
}

const minHeap = new MinHeap()
minHeap.insert(10)
minHeap.insert(5)
minHeap.insert(14)
minHeap.insert(20)
minHeap.insert(2)

console.log("Min value:", minHeap.peek()) // 2
console.log("Removed min:", minHeap.removeMin()) // 2
console.log("New min value:", minHeap.peek()) // 5

minHeap.insert(1)
console.log("New min after insert:", minHeap.peek()) // 1