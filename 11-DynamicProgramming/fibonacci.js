function fibonacci (n) {
    if (n <= 1) return n
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(10))  // Resultado: 55

function fibonacciDP (n, memo) {
    if (n <= 1) return n
    if (memo[n]) return memo[n]

    memo[n] = fibonacciDP(n - 1, memo) + fibonacciDP(n - 2, memo)
    return memo[n]
}

console.log(fibonacciDP(10, {}))  // Resultado: 55

function fibonacciBottomUp(n) {
    if (n <= 1) return n;

    const fib = [0, 1];  // Array para almacenar resultados
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];  // Guardar el resultado de cada subproblema
    }
    return fib[n];
}

console.log(fibonacciBottomUp(10));  // Resultado: 55
