function evalRPN(tokens) {
    let stack = []
    for (let str of tokens) {
        if (!isNaN(str)) {
            stack.push(Number(str))
        } else {
            console.log(stack)
            let a = stack.pop()
            let b = stack.pop()
            console.log(a, b)
            switch (str) {
                case '+': stack.push(b + a); break;
                case '-': stack.push(b - a); break;
                case '*': stack.push(b * a); break;
                case '/': stack.push(Math.floor(b / a)); break;
            }
        }
    }
    return stack.pop()
}

console.log(evalRPN(["1", "2", "+", "3", "*", "4", "-"]))