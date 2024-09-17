const numArray = [1, 3, 2, 6, 10, 8, 15, 4, 20, 17]


const bubbleSort = (array) => {
    for (let i = 2; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }

    return array
}

console.log((bubbleSort(numArray)))
console.log(numArray.sort((a, b) => a > b))