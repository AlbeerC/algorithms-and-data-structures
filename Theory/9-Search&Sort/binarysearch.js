// La búsqueda binaria es un algoritmo de búsqueda rápida para listas ordenadas.
// En cada paso, se divide la lista en dos partes iguales, y conservamos la mitad donde estaría el elemento buscado.

function binarySearch(array, target) {
    let left = 0
    let right = array.length - 1

    while (left <= right) {
        let middle = Math.floor((left + right) / 2)

        if (array[middle] === target) {
            return middle
        } else if (array[middle] < target) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
}

console.log(binarySearch([1, 3, 5, 7, 9], 7))
console.log(binarySearch([1, 2, 5, 7, 9, 10, 14, 17, 20, 21, 25, 30, 45, 56], 17))