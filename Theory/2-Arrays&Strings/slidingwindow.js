// Supongamos que tenemos un array nums y queremos encontrar la suma máxima de cualquier subarray de longitud k.

const maxSum = (nums, k) => {

    let windowSum = 0
    let maxSum = -Infinity

    // Calcular suma en la primer ventana
    for (let i = 0; i < k; i++) {
        windowSum += nums[i]
    }

    maxSum = windowSum

    // Desliza la ventana a través del array
    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k] // Guarda los dos valores del medio, saca el valor que se va, y agrega el
                                           // nuevo. (12 + 9 - 2)
        maxSum = Math.max(maxSum, windowSum) // Actualiza maxSum si es mayor
    }

    return maxSum
}

const arr = [2, 4, 6, 9, 10, 5, 3, 12, 15, 17, 8]
const sub = 3

console.log(maxSum(arr, sub)) // 44