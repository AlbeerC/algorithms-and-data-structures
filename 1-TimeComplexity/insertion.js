
function insertionSort() {
    const array = [5, 3, 4, 8, 7, 5, 1, 2, 3]  // 1

    for (let i = 1; i < array.length; i++) {   // n
        let curr = array[i]                    // n
 
        let j = i - 1                          // n
        while (j >= 0 && array[j] > curr) {    // n²
            array[j + 1] = array[j]            // n²
            j--                                // n²
        }
        array[j + 1] = curr                    // n
    }

    return array
}

// 3n²+4n+1 = O(n²)

console.log(insertionSort())