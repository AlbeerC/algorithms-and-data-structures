class HashTable {
    constructor() {
        this.table = new Array(this.size)
        this.size = 1000
    }

    put(key, value) {
        const keyHash = this.hashString(key)
        const index = keyHash % this.size
        if (this.table[index] === undefined) {
            this.table[index] = []
        }
        this.table[index].push({ key, value })
    }

    get(key) {
        const keyHash = this.hashString(key)
        const index = keyHash % this.size
        if (this.table[index] === undefined) {
            return undefined
        }
        return this.lookUp(this.table[index], key)
    }

    lookUp(bucket, key) {
        for (let item of bucket) {
            if (item.key === key) {
                return item.value
            }
        }
        return undefined
    }

    hashString(strKey) {
        let hash = 0, i, chr
        if (strKey.length === 0) { return hash }
        for (i = 0; i < strKey.length; i++) {
            chr = strKey.charCodeAt(i)
            hash = ((hash << 5) - hash) + chr
            hash |= 0 // Convert to 32bit integer
        }
        return hash
    }
}

const table = new HashTable()
table.put(1, 1)
table.put(2, 2)
table.put(3, 3)
table.put(4, 4)
table.put(1001, 15)
table.put(1002, "Hello")
console.log(table.get(1))
console.log(table.get(2))
console.log(table.get(3))
console.log(table.get(4))
console.log(table.get(1001))
console.log(table.get(1002))
console.log(table.table)