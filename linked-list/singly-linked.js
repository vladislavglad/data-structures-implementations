class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addFirst(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    addLast(data) {
        let newNode = new Node(data);

        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    removeFirst() {
        if (this.head === null)
            throw new Error("No element to remove!");

        let data = this.head.data;
        
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else 
            this.head = this.head.next;
        
        return data;
    }

    toString() {
        let temp = this.head;
        let str = "";
        while (temp !== null) {
            str += temp.data + " ";
            temp = temp.next;
        }
        return str;
    }
}

module.exports = LinkedList;