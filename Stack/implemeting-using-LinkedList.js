class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructir() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
            this.length++;
            return this;
        }

        newNode.next = this.top;
        this.top = newNode;
        this.length++;
        return this;
    }

    pop() {
        if(this.length === 0) {
            return null;
        }

        const poppedNode = this.top;
        this.top = this.top.next;
        this.length--;
        return poppedNode.value;
    }

    peek() {
        if(this.length === 0) {
            return null;
        }
        return this.top.value;
    }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
console.log(myStack.peek());
console.log(myStack);
myStack.pop();
console.log(myStack);
myStack.pop();
console.log(myStack);
myStack.pop();
console.log(myStack);
