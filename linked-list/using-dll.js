const DLList = require("./doubly-linked");

console.log("DLList with no elements:");
let l = new DLList();
console.log(l);

console.log("\nAdding first element into an empty list:");
l.addFirst(5);
console.log(l);

console.log("\nAdding first into list that has some elements:");
l.addFirst(7);
console.log(l);

console.log("\nClearing out the list. . .");
l = new DLList();
console.log("isEmpty(): " + l.isEmpty());
console.log(l);

console.log("\nAdding last to the empty list:");
l.addLast(5);
console.log(l);

console.log("\nAdding last into list that has some elements:");
l.addLast(7);
console.log(l);

l = new DLList();
// l.removeFirst(); // throws Error.

console.log("\nList Before removing:");
l.addFirst(5);
console.log(l);

console.log("\nRemoving the only element:");
l.removeFirst();
console.log(l);

console.log("\nMore than one element:");
l.addFirst(12);
l.addFirst(15);
l.addLast(18);
console.log(l);

console.log("\nRemoving first element:");
l.removeFirst();
console.log(l);

console.log("\nClearing out the list. . .");
l = new DLList();

// l.removeLast(); // throws Error.

console.log("\nAdding only one element. . .");
l.addLast(5);
console.log(l);

console.log("\nRemoving (last) the only element:");
l.removeLast();
console.log(l);

console.log("\nMore than one element:");
l.addLast(12);
l.addLast(15);
l.addLast(18);
console.log(l);

console.log("\nRemoving last element:");
l.removeLast();
console.log(l);