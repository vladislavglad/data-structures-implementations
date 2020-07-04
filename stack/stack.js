const LinkedList = require("../linked-list/singly-linked");

class Stack {
    constructor() {
        this.list = new LinkedList();
        this.size = 0;
    }

    pop() {
        let data = this.list.removeFirst();
        this.size--;
        return data;
    }

    push(item) {
        this.list.addFirst(item);
        this.size++;
    }

    peek() {
        return this.list.head.data;
    }

    isEmpty() {
        return this.size === 0;
    }
}

module.exports = Stack;