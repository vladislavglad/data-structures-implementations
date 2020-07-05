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

            /*
              One step in advance: check if child is null
              Because if you pass null as a node in a subsequent call
              null does not have properties such as "data" "left" and "right"
              (and cannot be assigned new value),
              which previously caused crash of the program. 

              In Java root would be declared (typed) such as:
                    private TreeNode<E> root = null;
              and when you pass it to a function it knows its exact type,
              and can assign some new value to it, unlike untyped null as in JS. 

              For example:
                    private TreeNode<E> add(TreeNode<E> root, E data) {
                        if(root==null) {
                            root = new TreeNode<E>(data, null, null);
                            return root;
                        }
            */
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

    // log(n) for balanced tree.
    // n for unbalanced.
    contains(value, root = this.root) {
        if (root === null)
            return false;
        
        if (root.data === value)
            return true;
        else if (value < root.data)
            return this.contains(value, root.left);
        else 
            return this.contains(value, root.right);
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