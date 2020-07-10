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

    removeAtIndex(index) {

        //check if index is at head.
        if (index === 0)
            return this.removeFirst();
        
        let previous = this.aproachToIndex(index-1);

        // if node to remove is tail.
        if (previous.next === this.tail) {
            let data = previous.next.data;
            this.tail = previous;
            previous.next = null;
            return data;
        }
   
        // Skip the Node at given index.
        previous.next = previous.next.next;
    }

    removeByValue(data) {
        this.removeAtIndex( this.indexOf(data) );
    }

    indexOf(data) {
        let index = 0;
        let node = this.head;
        while(node !== null) {
            if (node.data === data)
                return index;
            else {
                node = node.next;
                index++;
            }   
        }
        return -1;
    }

    aproachToIndex(index) {

        // Should introduce 'size' parameter 
        // and validate index passed.

        let node = this.head;
        let currentIndex = 0;

        while (node !== null && currentIndex < index) {
            node = node.next;
            currentIndex++;
        }

        if (node !== null && index >= 0)
            return node;
        else 
            throw new RangeError("index is out of bounds!"); 
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