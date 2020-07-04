const Queue = require("./queue");

let myQueue = new Queue();
console.log("Is Queue empty? " + myQueue.isEmpty());

myQueue.add(1);
myQueue.add(2);
myQueue.add(3);

console.log("Peek first element: " + myQueue.peek());
console.log("Remove first element: " + myQueue.remove());

console.log("New first element is: " + myQueue.peek());
