class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let currentNode = this.root;
            while(true) {
                if(value < currentNode.value) {
                    //left node
                    if(!currentNode.left) {
                        currentNode.left = newNode
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
        
    }

    lookup(value) {
        if(this.root === null) {
            return false;
        }
        let currentNode = this.root;
        while(currentNode) {
            if(value < currentNode.value) {
                currentNode = currentNode.left;
            } else if(value > currentNode.value) {
                currentNode = currentNode.right;
            } else if(currentNode.value === value) {
                return currentNode;
            }
        }
        return false;
    }
}

const binaryTree = new BinarySearchTree();
binaryTree.insert(9);
binaryTree.insert(4);
binaryTree.insert(20);
binaryTree.insert(1);
binaryTree.insert(6);
binaryTree.insert(15);
binaryTree.insert(170);
console.log(binaryTree);
console.log(binaryTree.lookup(220))
