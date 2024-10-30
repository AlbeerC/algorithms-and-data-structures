// Imagina que tienes un array ordenado nums y necesitas determinar si hay dos números que sumen un valor target. Utilizando el método de Dos Punteros

const nums = [2,7,11,15]
const target = 9

// With two pointer
const twoSum = (array, target) => {
    let i = 0
    let j = array.length - 1
    
    while (i < j) {
        const sum = array[i] + array[j]
        
        if (sum === target) {
            return [i, j]
        }
    
        if (sum < target) {
            i++
        } else {
            j--
        }
    }

    return null
}


// With map
const twoSumWithMap = (nums, target) => {
    let map = {}

    for (let i = 0; i < nums.length; i++) {
        
        let diff = target - nums[i]

        if (map.hasOwnProperty(diff)) {
            return [i, map[diff]]
        }

        map[nums[i]] = i
    }


    return null
}

console.log(twoSum(nums, target))
console.log(twoSumWithMap(nums, target))