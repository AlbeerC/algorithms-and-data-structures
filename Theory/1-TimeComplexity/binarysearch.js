
function binarySearch(array, target) {
    let left = 0                                        // 1
    let right = array.length - 1                        // 1

    while (left <= right) {                             // log(n)
        let middle = Math.floor((left + right) / 2)     // log(n)

        if (array[middle] === target) {                 // log(n)
            return middle                               // 1
        } else if (array[middle] < target) {            // log(n)
            left = middle + 1                           // log(n)
        } else {
            right = middle - 1                          // log(n)
        }
    }

    return -1
}

console.log(binarySearch([1, 3, 5, 7, 9], 7))