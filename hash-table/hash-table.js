const LinkedList = require('../linked-list/singly-linked');

class HashTable {
    constructor(size = 10) {
        this.table = new Array(size);

        for (let i = 0; i < size; i ++ )
            this.table[i] = new LinkedList();
    }

    hashCode(key) {
        let hash = 0;
        for (let i = 0; i < String(key).length; i++) {
            hash += String(key).charCodeAt(i);
        }
        return hash;
    }

    getIndex(key) {
        let index = this.hashCode(key) % this.table.length;
        // console.log(`key: ${key} has index: ${index}`);
        return index;
    }

    insert(key) {
        this.table[ this.getIndex(key) ].addLast(key);
    }

    insertPair(key, value) {
        this.table[ this.getIndex(key) ].addLast({
            key: key,
            value: value
        });
    }

    retrieve(key) {
        return this.table[ this.getIndex(key) ];
    }

    remove(key) {
        this.table[ this.getIndex(key) ].removeByValue(key);
    }
}

module.exports = HashTable;