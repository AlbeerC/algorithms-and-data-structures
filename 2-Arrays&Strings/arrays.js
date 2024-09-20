const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Accessing elements
const firstElement = array1[0]
const lastElement = array1[array1.length - 1]
const middleElement = array1[4]

// Inserting and deleting elements
array1.unshift(0) // Inserta al principio
array1.push(11) // Inserta al final
array1.shift() // Elimina el primero
array1.pop() // Elimina el último

const months = ['Jan', 'March', 'April', 'June']
months.splice(1, 0, 'Feb') // Inserta en el segundo
months.splice(4, 1) // Elimina el índice 4
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// Looping through arrays
for (let i = 0; i < array1.length; i++) {
  console.log(array1[i])
}

for (let month of months) {
    console.log(month)
}

while (array1.length > 0) {
  array1.pop() // Elimina el último en cada iteración
}

// Searching for elements
array1.includes(5) // Indica si el elemento está en el array
array1.indexOf(5) // Devuelve el índice del primer elemento que coincida con lo que pasamos como parámetro
array1.find((element) => element > 5) // Devuelve el primer elemento que cumpla la condición
array1.filter((element) => element > 5) // Devuelve un nuevo array con los elementos que cumplan la condición

// Sorting arrays
array1.sort() // Ordena alfabéticamente
array1.sort((a, b) => a - b) // Ordena de mayor a menor
array1.reverse() // Invierte el orden de los elementos

// Slicing arrays
const array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
array2.slice(0, 3) // Devuelve los elementos del índice 0 al 3. No incluye el índice 3
array2.slice(3) // Devuelve los elementos del índice 3 al final. Incluye el índice 3

// Multidimensional arrays
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
matrix[0][1] // Devuelve el valor de la celda en la fila 0 y columna 1
matrix[1] // Devuelve el valor de la fila 1
matrix[1][1] = 10 // Modifica el valor de la celda en la fila 1 y columna 1
matrix.push([10, 11, 12]) // Agrega una fila al final
matrix.forEach((row) => row.push(0)) // Agrega una columna al final con valor 0

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]) // Accede a cada elemento de la matriz
    }
}


// Searching for elements with linearSearch. O(n) time complexity
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i
    }
  }

  return -1
}

// Searching for elements with binarySearch. O(log n) time complexity
// La búsqueda binaria solo funciona con arreglos ordenados
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
  return -1
}

console.log(linearSearch([1, 2, 3, 4, 5], 4))
console.log(binarySearch([1, 2, 3, 4, 5], 4))