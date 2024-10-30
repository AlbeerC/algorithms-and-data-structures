// Eliminar elementos repetidos
const array = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8]
const uniqueValues = new Set(array) // {1, 2, 3, 4, 5, 6, 7, 8}

// Comprobar si un elemento existe
const set = new Set([1, 2, 3, 4])
console.log(set.has(2)) // true
console.log(set.has(5)) // false

// Encontrar elementos que existen en ambos sets (intersección)
const set1 = new Set([1, 2, 3])
const set2 = new Set([2, 3, 4])
const intersection = new Set([...set1].filter(x => set2.has(x))) // {2, 3}

// Combinar dos sets (union)
const set3 = new Set([1, 2, 3])
const set4 = new Set([2, 3, 4])
const union = new Set([...set1, ...set2]) // {1, 2, 3, 4}

// Encontrar elementos que existen en uno pero no en el otro (diferencia)
const set5 = new Set([1, 2, 3])
const set6 = new Set([2, 3, 4])
const difference = new Set([...set5].filter(x => !set6.has(x))) // {1}



// Métodos
const testArray = [1, 2, 3, 4, 5, 6, 7, 8]
const testSet = new Set(testArray)
console.log(testSet.add(9)) // true
console.log(testSet.has(9)) // true
console.log(testSet.delete(9)) // true
console.log(testSet.clear())
console.log(testSet)