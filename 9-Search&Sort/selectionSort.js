// Selecciona el elemento más pequeño (o más grande) de la lista y lo coloca en su posición correcta en cada iteración
// Es sencillo pero ineficiente, con una complejidad de tiempo O(n²)

function selectionSort(array) {

    for (let i = 0; i < array.length; i++) {
        let minIndex = i
        
        for(let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }

        [array[i], array[minIndex]] = [array[minIndex], array[i]]
    }

    return array
}

console.log(selectionSort([5, 3, 8, 4, 2])) // Output: [2, 3, 4, 5, 8]