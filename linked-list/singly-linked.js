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

let myList1 = new LinkedList();
let myList2 = new LinkedList();
let myList3 = new LinkedList();

for (let i = 0; i < 10; i++) {
    myList1.addFirst(i);
    myList2.addLast(i);
}

console.log("first list: " + myList1.toString());
console.log("second list: " + myList2.toString());

myList1.addFirst(15);
myList1.addLast(16);
console.log("modified list: " + myList1.toString());

console.log("removing first element: " + myList1.removeFirst());
console.log("list after removing: " + myList1.toString());

try {
    myList3.removeFirst();
} catch(err) {
    console.error(err);
}
