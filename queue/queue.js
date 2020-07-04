const LinkedList = require("../linked-list/singly-linked");

class Queue {
    constructor() {
        this.list = new LinkedList();
        this.size = 0;
    }

    add(item) {
        this.list.addLast(item);
        this.size++;
    }

    remove() {
        let data = this.list.removeFirst();
        this.size--;
        return data;
    }

    peek() {
        return this.list.head.data;
    }

    isEmpty() {
        return this.size === 0;
    }
}

module.exports = Queue;