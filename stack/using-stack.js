const Stack = require("./stack");

let myStack = new Stack();
console.log("Is my stack empty? " + myStack.isEmpty());

myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log("Top element is: " + myStack.peek());
console.log("Poping the first element: " + myStack.pop());
console.log("Now top element is: " + myStack.pop());