// Diseñar una pila que soporte los métodos push, pop, top y que devuelva el elemento más chico en tiempo constante
// No usamos un for para obtener el valor más chico, ya usándolo pasaría a ser O(n) y necesitamos que sea O(1)

class MinStack {

    constructor() {
        this.items = []
        this.minVal = []
    }

    push(val) {
        this.items.push(val)

        // Se agrega a minVal si este esta vacío o el valor a agregar es más chico o igual que el último valor de minVal
        if (this.min.length === 0 || val <= this.getMin()) {
            this.minVal.push(val)
        }
    } 

    pop() {
        let popped = this.items.pop()
    
        // Se elimina de minVal si el elemento a eliminar es igual que el último elemento de minVal
        if (popped === this.getMin()) {
            this.minVal.pop()
        }
    }

    top() {
        if (this.items.length !== 0) {
            return this.items[this.items.length - 1]
        }
    }

    getMin() {
        return this.minVal[this.minVal.length - 1]
    }
}

const minStack = new MinStack

minStack.push(-2)
minStack.push(0)
minStack.push(-3)
minStack.getMin()   // return -3
minStack.pop()
minStack.top()      // return 0
minStack.getMin()   // return -2