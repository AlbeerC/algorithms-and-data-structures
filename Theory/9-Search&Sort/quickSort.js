// Es un algoritmo basado en la idea de divide y vencerás
// Selecciona un "pivote" y divide el array en dos subarrays. Uno con elementos menores que el pivote y otro con elementos mayores. Luego, ordena los arrays recursivamente.
// Es ineficiente para listas grandes. (O(n log n) o O(n²) en el peor de los casos)

function quickSort(array) {
    // Caso base
    if (array.length <= 1) {
        return array
    }

    const pivot = array[array.length - 1]
    const left = []
    const right = []

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }

    // Ordena recursivamente los arrays
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([5, 3, 8, 4, 2])) // Output: [2, 3, 4, 5, 8]