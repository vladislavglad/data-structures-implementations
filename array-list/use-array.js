const ArrayList = require("./array-list");

let arr = new ArrayList(); // default length is 16.

console.log("initially .isEmpty(): " + arr.isEmpty());

for (let i = 0; i < 16; i ++) 
    arr.add( Math.floor(Math.random() * 25) );

console.log("after populating an array isEmpty(): " + arr.isEmpty());
console.log(arr.toString());

console.log("\nBounds checking:")
console.log(arr.isOutOfBounds(-3));
console.log(arr.isOutOfBounds(5));
console.log(arr.isOutOfBounds(19));

console.log("\n.contains(16): " + arr.contains(16));
console.log("\n.isFull(): " + arr.isFull())

console.log("\nlength before adding new element: " + arr.length());
arr.add(22);
console.log("arr.length() after resizing: " + arr.length());

console.log("\nadding 100 elements. . .");
for (let i = 0; i < 100; i ++)
    arr.add(i);
console.log("new length of the arr is " + arr.length());

console.log("\nclearing the arr with arr.clear()");
arr.clear();
console.log("new length is: " + arr.length() + " isEmpty(): " + arr.isEmpty());

// Checking functions based on index.
let a = new ArrayList();
a.add(5);
a.add(3);
a.add(6);
a.add(1);
a.add(2);

console.log("\nindex based insertions/delitions.")
console.log("" + a);

console.log("removing an existing element. . .");
a.removeByVal(3);
console.log("a.removeByVal(3): " + a);

// console.log("trying to remove non-existing element. . .");
// a.removeByVal(23);

a.addAtIndex(0, 23);
console.log("a.addAtIndex(0, 23): " + a);

a.remove(0);
console.log("a.remove(0): " + a);