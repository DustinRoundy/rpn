let input = prompt('enter space separated rpn expression');
let stack = new Stack();
let rpnArray = input.split(' ');

for (let i = 0; i < rpnArray.length; i++) {
    const element = rpnArray[i];

    if(element == '+') {
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            let result = operand1 + operand2;
            stack.push(result);
        }
        else if(element == '-') {
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            let result = operand1 - operand2;
            stack.push(result);
        }
        else if(element == '*') {
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            let result = operand1 * operand2;
            stack.push(result);
        }
        else if(element == '/') {
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            let result = operand1 / operand2;
            stack.push(result);
        }
        else {
            stack.push(+element);
        }
}

alert(stack.peek());