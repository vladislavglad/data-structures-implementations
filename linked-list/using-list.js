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

// // Trying to remove and from an empty list.
// try {
//     myList3.removeFirst();
// } catch(err) {
//     console.error(err);
// }

let list = new LinkedList();
list.addLast(0);
list.addLast(1);
list.addLast(2);
list.addLast(3);

console.log("\nindexOf(2) " + list.indexOf(2));
console.log("indexOf(21) " + list.indexOf(21));
//console.log(list);

//console.log(list.aproachToIndex(1));

console.log("\nList before removing node at index 1:");
console.log(list);
list.removeAtIndex(1);
console.log("List after removing node at index 1:");
console.log(list);

list.removeByValue(2);
console.log("\nList after removing node by value of 2");
console.log(list);