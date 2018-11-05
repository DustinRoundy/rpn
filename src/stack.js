class Stack {
    constructor(){
        this.data = [];
    }
    push(element){
        this.data.push(element);
    }
    pop(){
        return this.data.pop();
    }
    size(){
        return this.data.length;
    }
    peek(){
        return this.data[this.data.length - 1];
    }
}
