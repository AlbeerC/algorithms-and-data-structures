function firstUniqChar(s) {
    let map = {}
    let queue= []

    // Paso 1: Recorremos la cadena para construir el mapa de frecuencias
    for (let i = 0; i < s.length; i++) {
        let char = s[i]

        // Actualizamos la frecuencia del carácter
        map[char] = (map[char] || 0) + 1

        // Paso 2: Si el carácter aparece por primera vez, lo añadimos a la cola
        if (map[char] === 1) {
            queue.push(i)
        }

        // Paso 3: Si el primer carácter en la cola es repetido, lo removemos
        while (queue.length > 0 && map[s[queue[0]]] > 1) {
            queue.shift()
        }
    }

    // Paso 4: Si la cola tiene elementos, el primero es el primer carácter no repetido
    return queue.length > 0 ? queue[0] : -1
}

firstUniqChar("leetcode") // 0
firstUniqChar("loveleetcode") // 2
firstUniqChar("aaabbb") // -1