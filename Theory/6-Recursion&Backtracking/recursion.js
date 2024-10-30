
const booksArr = [100, 200, 150, 120]

function countPages(books) {
    let total = 0

    for (let i = 0; i < books.length; i++) {
        total += books[i]
    }

    return total
}

function countPagesWithRecursion(books) {
    // Caso base. Cuando al array le queda solo un elemento, devuelve ese elemento
    if (books.length === 1) {
        return books[0]
    }

    return books[0] + countPagesWithRecursion(books.slice(1))
    // 1ra llamada: return 100 + countPagesWithRecursion([200, 150, 120])
    // 2da llamada: return 200 + countPagesWithRecursion([150, 120])
    // 3ra llamada: return 150 + countPagesWithRecursion([120])
    // 4ta llamada (caso base): return 120
}

// Durante la recursión: la suma no ocurre inmediatamente. Solo se almacena el valor actual (books[0])
// Después del caso base: la suma ocurre al retornar los valores acumulados desde el fondo de la recursión hacia arriba
// Es decir, cuando las llamadas se van desapilando de arriba hacia abajo, se suman los valores

console.log(countPages(booksArr))
console.log(countPagesWithRecursion(booksArr))



function factorial(n) {
    if (n === 1) return 1 // Caso base
    return n * factorial(n - 1) // Llamada recursiva
}


function fibonacci(n) {
    if (n === 0 || n === 1) return n // Casos base
    return fibonacci(n - 1) + fibonacci(n - 2) // Llamadas recursivas
}
  