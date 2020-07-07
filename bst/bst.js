class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    // Could use this function to insert a child node.
    addChild(val) {
        
        if (val < this.val) {

            if (this.left === null)
                this.left = new Node(val);
            else
                this.left.addChild(val);

        } else {

            if (this.right === null)
                this.right = new Node(val);
            else 
                this.right.addChild(val);

        }
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let newNode = new Node(data);
        
        // Preconditioning: making sure that on the very first call,
        // root gets initialized.
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

    // Inserting using Node's own function.
    insert_v2(val) {
        if (this.root === null)
            this.root = new Node(val);
        else    
            this.root.addChild(val);
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

// Another (prefered) version of the same thing.
class MyTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        this.root = this.insertNode(val, this.root);
    }

    // No initial preconditioning of the root.
    insertNode(val, root) {
        if (root === null)
            return new Node(val);
        else if (root.value > val) 
            root.left = this.insertNode(val, root.left);
        else 
            root.right = this.insertNode(val, root.right);

        return root; // rebuild the references: bottom -> top.
    }

    traversal(root = this.root) {
        if (root === null)
            return;

        this.traversal(root.left);
        console.log(root.value);
        this.traversal(root.right);
    }
}