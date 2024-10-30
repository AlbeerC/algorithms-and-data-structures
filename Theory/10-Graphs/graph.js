class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1) // Para grafos no dirigidos
    }

    bfs(start) {
        const queue = [start]
        const visited = {}
        visited[start] = true

        while (queue.length > 0) {
            const vertex = queue.shift()
            console.log(vertex)

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }
    }

    dfs(start) {
        const stack = [start]
        const visited = {}
        visited[start] = true

        while (stack.length > 0) {
            const vertex = stack.pop()
            console.log(vertex)

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
    }
}

// Creamos los nodos (vértices) y las conexiones entre estos (aristas)
const graph = new Graph
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addEdge('A', 'B')
graph.addEdge('C', 'A')
graph.addEdge('D', 'C')
graph.addEdge('D', 'B')
console.log(graph.adjacencyList)

// Recorremos el grafo por niveles, explorando todos los vecinos de un nodo antes de pasar al siguiente nodo
const graph2 = new Graph
graph2.addVertex('A')
graph2.addVertex('B')
graph2.addVertex('C')
graph2.addVertex('D')
graph2.addVertex('E')
graph2.addVertex('F')
graph2.addEdge('A', 'B')
graph2.addEdge('A', 'C')
graph2.addEdge('A', 'D')
graph2.addEdge('C', 'E')
graph2.addEdge('C', 'F')
graph2.addEdge('D', 'F')
// Empieza desde el primer nodo ('A')
console.log("BFS:")
graph2.bfs('A')
console.log("DFS:")
graph2.dfs('A')