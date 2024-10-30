
// Con recursividad
const climbStairsRec = function(n) {
    if (n === 0 || n === 1) return 1
    if (n < 0) return 0
    return climbStairsRec(n - 1) + climbStairsRec(n - 2)
}

console.log(climbStairsRec(5))


// Con dynamic programming (top down)
const climbStairs = function(n, memo = {}) {

    if (n === 0) return 1
    if (n < 0) return 0
    if (memo[n]) return memo[n]

    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo)
    return memo[n]
}

console.log(climbStairs(5))