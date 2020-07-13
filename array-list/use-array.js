const ArrayList = require("./array-list");

let arr = new ArrayList(); // default length is 16.

console.log(".isEmpty()");
console.log(arr.isEmpty());

for (let i = 0; i < 16; i ++) 
    arr.add( Math.floor(Math.random() * 25) );

console.log(arr.isEmpty());
console.log(arr.arr);

console.log("Bounds checking:")
console.log(arr.isOutOfBounds(-3));
console.log(arr.isOutOfBounds(5));
console.log(arr.isOutOfBounds(19));

console.log(".contains(16)");
console.log(arr.contains(16));

console.log(".isFull()")
console.log(arr.isFull());

console.log("adding new element:");
arr.add(22);

console.log("arr.lengt()");
console.log(arr.length());

console.log(".clear()");
arr.clear();
console.log(arr.length());
console.log(arr.isEmpty());
