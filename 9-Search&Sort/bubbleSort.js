// El bubble sort es un algoritmo simple que recorre el array, comparando pares de elementos adyacentes, y los intercambia si están en orden incorrecto
// Es ineficiente para listas grandes. (O(n²))

const bubbleSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }

    return array
}

console.log(bubbleSort([5, 3, 8, 4, 2])) // Output: [2, 3, 4, 5, 8]