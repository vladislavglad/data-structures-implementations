class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let newNode = new Node(data);
        
        if (this.root === null)
            this.root = newNode;
        else 
            this.insertNode(this.root, newNode);
    }

    insertNode(root, newNode) {

        if (root === null)
            return newNode;
        else if (newNode.data < root.data) 
            root.left = this.insertNode(root.left, newNode);
        else
            root.right = this.insertNode(root.right, newNode);
    }

    inorderTraversal(root = this.root) {
        if (root === null)
            return;

        this.inorderTraversal(root.left);
        console.log(root.data);
        this.inorderTraversal(root.right);
    }
}

module.exports = BST;