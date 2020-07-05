const BST = require("./bst");

let myBST = new BST();
myBST.insert(8);
myBST.insert(6);
myBST.insert(9);
myBST.insert(15);
myBST.insert(3);
myBST.insert(7);

console.log("BST.contains(15): " + myBST.contains(15));
console.log("BST.contains(25): " + myBST.contains(25));

console.log("\nInorder traversal: ");
myBST.inorderTraversal();