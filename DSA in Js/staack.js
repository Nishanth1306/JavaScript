class Stack {
    constructor() {
      this.stack = [];
    }
  
    push(element) {
      this.stack.push(element);
    }
  
    pop() {
      return this.stack.pop();
    }
  
    peek() {
      return this.stack[this.stack.length - 1];
    }
  
    isEmpty() {
      return this.stack.length === 0;
    }
  
    size() {
      return this.stack.length;
    }
  }
  let stack = new Stack();
  stack.push(10);
  stack.push(20);
  console.log(stack.pop());  
  console.log(stack.peek()); 
  console.log(stack.pop());
    console.log(stack.peek() === undefined ? "The Stack is Empty" : stack.peek());


    