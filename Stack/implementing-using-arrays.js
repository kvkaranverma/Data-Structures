class Stack {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    push(value) {
        this.data[this.length] = value;
        this.length++;
        return this;
    }

    pop() {
        delete this.data[this.length - 1];
        this.length--;
        return this;
    }

    peek() {
        return this.data[this.length - 1 ];
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
