const generateCombinations = (nums) => {
    const result = []

    const backtrack = (start, combination) => {
        result.push([...combination]) // Agrega la combinación actual al resultado

        for (let i = start; i < nums.length; i++) {
            combination.push(nums[i]) // Agrega el número actual a la combinación
            backtrack(i + 1, combination) // Llama recursivamente con el siguiente número
            combination.pop() // Retrocede, elimina el último número agregado
        }
    }

    backtrack(0, [])
    return result
}

const nums = [1, 2, 3]
const combinations = generateCombinations(nums)
console.log(combinations)




// Ejemplo más complejo: encontrar la salida del laberinto

const maze = [
    [0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0]
]

const rows = maze.length
const cols = maze[0].length

const isSafe = (x, y) => {
    return x >= 0 && x < rows && y >= 0 && y < cols && maze[x][y] === 0
}

const findPath = (x, y, path) => {
    // Si llegamos a la salida
    if (x === rows - 1 && y === cols - 1) {
        path.push([x, y]) // Agregamos la posición de salida al camino
        console.log('Path found:', path)
        return true
    }

    // Marca la celda actual como parte del camino
    path.push([x, y])
    maze[x][y] = 2 // Marca como visitado

    // Movimientos: abajo, arriba, derecha, izquierda
    const directions = [
        [1, 0], // Abajo
        [-1, 0], // Arriba
        [0, 1], // Derecha
        [0, -1]  // Izquierda
    ]

    for (const [dx, dy] of directions) {
        const newX = x + dx
        const newY = y + dy

        if (isSafe(newX, newY)) {
            // Si el siguiente paso es seguro, llamamos recursivamente
            if (findPath(newX, newY, path)) {
                return true // Si encontramos un camino, terminamos
            }
        }
    }

    // Deshacemos la última posición si no encontramos un camino
    path.pop()
    maze[x][y] = 0 // Desmarca como visitado
    return false
}

const findMazePath = () => {
    const path = []
    if (!findPath(0, 0, path)) {
        console.log('No path found')
    }
}

// Devuelve el primer camino encontrado o undefined si no hay camino
findMazePath()