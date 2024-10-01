class BinaryTree {

    constructor() {
        this.root = null
    }

    Node(value) {
        return {
            value,
            left: null,   
            right: null
        }
    }

    // Visita el hijo izquierdo, luego el nodo y finalmente el hijo derecho.
    inorder(node) {
        if (node === null) { return }

        this.inorder(node.left) // Recorrer el sub-árbol izquierdo
        console.log(node.value) // Imprimir el valor del nodo
        this.inorder(node.right) // Recorrer el sub-árbol derecho
    }

    // Visita el nodo actual antes de sus hijos
    preorder(node) {
        if (node === null) { return }

        console.log(node.value)
        this.preorder(node.left)
        this.preorder(node.right)
    }

    // Visita primero los hijos y luego el nodo
    postorder(node) {
        if (node === null) { return }

        this.postorder(node.left)
        this.postorder(node.right)
        console.log(node.value)
    }



    // Insertar un valor en el árbol
    insert(value, root = this.root) {
        // Caso base para la recursión
        if (this.root === null) {
            this.root = this.Node(value)
            return
        }

        if (value <= root.value) {
            if (root.left === null) {
                root.left = this.Node(value)
            } else {
                this.insert(value, root.left) // Llamada recursiva en el subárbol izquierdo
            }
        } else {
            if (root.right === null) {
                root.right = this.Node(value)
            } else {
                this.insert(value, root.right) // Llamada recursiva en el subárbol derecho
            }
        }
    }

    // Buscar un nodo por valor
    search(value, root = this.root) {
        if (root === null || root.value === value) { 
            return root 
        }

        if (value < root.value) {
            return this.search(value, root.left)
        }

        return this.search(value, root.right)
    }

    // Eliminar un nodo por valor
    delete(value, root = this.root) {
        // Caso base para la recursión
        if (root === null) {
            return root   // Si el árbol está vacío, no hay nada que borrar
        }

        // Si el valor a eliminar es menor que el valor del nodo actual, buscamos en el subárbol izquierdo
        if (value < root.value) {
            root.left = this.delete(value, root.left)

        // Si el valor a eliminar es mayor que el valor del nodo actual, buscamos en el subárbol derecho
        } else if (value > root.value) {
            root.right = this.delete(value, root.right)

        // Si encontramos el nodo que coincide con el valor:    
        } else {
            // Caso 1: El nodo a eliminar no tiene hijo izquierdo o no tiene hijos. Devolvemos el hijo derecho
            if (root.left === null) {
                return root.right
            }

            // Caso 2: El nodo a eliminar no tiene hijo derecho, devolvemos el hijo izquierdo
            if (root.right === null) {
                return root.left
            }

            // Caso 3: El nodo a eliminar tiene dos hijos
            // Se busca el valor mínimo del subárbol derecho (el menor valor mayor que el nodo actual)
            root.value = this.minValue(root.right)

            // Eliminamos el nodo que tiene el valor mínimo en el subárbol derecho (ya que ahora su valor
            // fue copiado al nodo actual)
            root.right = this.delete(root.value, root.right)
        }

        return root
    }

    minValue(root) {
        let min = root.value
        while (root.left !== null) {
            min = root.left.value
            root = root.left
        }

        return min
    }
}


const tree = new BinaryTree()

tree.insert(6)
tree.insert(4)
tree.insert(1)
tree.insert(5)
tree.insert(8)
tree.insert(9)
console.log("Inorder traversal:")
tree.inorder(tree.root)
console.log("Preorder traversal:")
tree.preorder(tree.root)
console.log("Postorder traversal:")
tree.postorder(tree.root)
console.log(tree.search(6))
tree.delete(5)
tree.inorder(tree.root)