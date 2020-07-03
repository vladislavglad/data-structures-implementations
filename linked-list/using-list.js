const LinkedList = require("./singly-linked");

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