class DLNode {
    constructor(data = null, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addFirst(data) {
        let n = new DLNode(data);

        // if no elements (size = 0) head is pointing to null.
        if (this.head === null) {
            this.head = n;
            this.tail = n;
        } else { // there is at least one element.
            n.next = this.head;
            this.head.prev = n;
            this.head = n;
        }

        this.size++;
    }   

    addLast(data) {
        let n = new DLNode(data);

        if (this.head === null) {
            this.head = n;
            this.tail = n;
        } else {
            n.prev = this.tail;
            this.tail.next = n;
            this.tail = n;
        }

        this.size++;
    }

    removeFirst() {
        // No elements.
        if (this.head === null) 
            throw new Error("No elements to remove!");


        let data = this.head.data;

        if (this.head === this.tail) { // only one element.
            this.head = null;
            this.tail = null;
        } else { // more than one element.
            let node = this.head.next;
            node.prev = null;
            this.head = node;
        }

        this.size--;
        return data;
    }

    removeLast() {
        if (this.head === null)
            throw new Error("No elements to remove!");

        let data = this.tail.data;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let node = this.tail.prev;
            node.next = null;
            this.tail = node;
        }

        this.size--;
        return data;
    }

    size() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }
}

module.exports = DLList;