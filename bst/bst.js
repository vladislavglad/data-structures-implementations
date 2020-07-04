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

        if (newNode.data < root.data) {
            if (root.left === null)
                root.left = newNode;
            else 
                this.insertNode(root.left, newNode);
        } else {
            if (root.right === null)
                root.right = newNode;
            else
                this.insertNode(root.right, newNode);
        }
    }

    inorderTraversal(node = this.root) {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.data);
            this.inorderTraversal(node.right);
        }
    }
}

module.exports = BST;