// También usa el enfoque de divide y vencerás
// Divide el array en dos mitades, las ordena de manera recursiva y luego las combina
// Es muy eficiente con una complejidad de tiempo O(n log n) en todos los casos (mejor, promedio y peor), pero tiene un coste de espacio adicional debido a la necesidad de arrays temporales

function mergeSort(array) {
    // Caso base
    if (array.length <= 1) {
        return array
    }

    const mid = Math.floor(array.length / 2)
    const left = mergeSort(array.slice(0, mid))
    const right = mergeSort(array.slice(mid))

    return merge(left, right)
}

const merge = (left, right) => {
    let result = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }

    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)]
}

console.log(mergeSort([5, 3, 8, 4, 2])) // Output: [2, 3, 4, 5, 8]