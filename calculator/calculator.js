
class Calculator {
    constructor() {
        this.display = document.getElementById('output');
        this.currentInput = '';
        this.operators = {
            '+': this.add,
            '-': this.subtract,
            '*': this.multiply,
            '/': this.divide,
            'sin': this.sin,
            'cos': this.cos,
            'tan': this.tan,
            'sqrt': this.sqrt,
            'log': this.log,
            'exp': this.exp,
            '!': this.fact,
        };
    }
    append(value) {
        this.currentInput += value;
        this.updateDisplay();
    }
    clear() {
        this.currentInput = '';
        this.updateDisplay();
    }

    updateDisplay() {
        this.display.textContent = this.currentInput || '0';
    }
    calculate() {
        try {
            let result = this.evaluateExpression(this.currentInput);
            this.currentInput = result.toString();
        } catch (error) {
            this.currentInput = 'Error';
        }
        this.updateDisplay();
    }
    evaluateExpression(expression) {
        let values = [];
        let operators = [];

        const precedence = (op) => {
            if (op === '+' || op === '-') return 1;
            if (op === '*' || op === '/') return 2;
            if (op === '!') return 3; 
            return 0;
        };
        const applyOperator = (values, operators) => {
            const right = values.pop();
            const left = values.pop();
            const operator = operators.pop();
            if (operator === '!') {
                values.push(this.operators[operator].call(this, right));
            }
            else {
                values.push(this.operators[operator].call(this, left, right));
            } 
        };

        let i = 0;
        while (i < expression.length) {
            let char = expression[i];

            if (char === ' ') {
                i++;
                continue;
            }

            if (char >= '0' && char <= '9') {
                let num = '';
                while (i < expression.length && (expression[i] >= '0' && expression[i] <= '9' || expression[i] === '.')) {
                    num += expression[i++];
                }
                values.push(parseFloat(num));
            } else if (char === '(') {
                operators.push(char);
                i++;
            } else if (char === ')') {
                while (operators.length && operators[operators.length - 1] !== '(') {
                    applyOperator(values, operators);
                }
                operators.pop();
                i++;
            } else if (this.operators[char] || this.isFunction(expression, i)) {
                if (this.isFunction(expression, i)) {
                    let funcName = this.getFunction(expression, i);
                    i += funcName.length;

                    let start = i + 1;
                    let end = start;
                    let openParens = 1;
                    while (openParens !== 0 && end < expression.length) {
                        if (expression[end] === '(') openParens++;
                        if (expression[end] === ')') openParens--;
                        end++;
                    }
                    let innerExpression = expression.slice(start, end - 1);
                    let result = this.evaluateExpression(innerExpression);
                    values.push(this.operators[funcName].call(this, result));

                    i = end; 
                } else {
               
                    while (operators.length && precedence(operators[operators.length - 1]) >= precedence(char)) {
                        applyOperator(values, operators);
                    }
                    operators.push(char);
                    i++;
                }
            }
        }
        while (operators.length) {
            applyOperator(values, operators);
        }
        return values.pop();
    }
    isFunction(expression, i) {
        return expression.slice(i, i + 3) === 'sin' ||
               expression.slice(i, i + 3) === 'cos' ||
               expression.slice(i, i + 3) === 'tan' ||
               expression.slice(i, i + 4) === 'sqrt' ||
               expression.slice(i, i + 3) === 'log' ||
               expression.slice(i, i + 3) === 'exp' ||
               expression[0] === "!";

    }
    getFunction(expression, i) {
        if (expression.slice(i, i + 3) === 'sin' ||
            expression.slice(i, i + 3) === 'cos' ||
            expression.slice(i, i + 3) === 'tan') {
            return expression.slice(i, i + 3);
        }
        if (expression.slice(i, i + 4) === 'sqrt') return 'sqrt';
        if (expression.slice(i, i + 3) === 'log') return 'log';
        if (expression.slice(i, i + 3) === 'exp') return 'exp';
        if (expression[i] === '!') return '!';
        return '';
    }
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) throw new Error("Division by zero");
        return a / b;
    }

    sin(a) {
        return Math.sin(a * (Math.PI / 180));  
    }

    cos(a) {
        return Math.cos(a * (Math.PI / 180));  
    }

    tan(a) {
        return Math.tan(a * (Math.PI / 180));  
    }

    sqrt(a) {
        return Math.sqrt(a);
    }

    log(a) {
        return Math.log(a);
    }

    exp(a) {
        return Math.exp(a);
    }
    fact(n) {
        let res = 1;
        for (let i = 1; i <= n; i++) {
            res *= i;
        }
        return res;
    }
    backspace() {
        let display = document.getElementById("output");
        let currentText = display.textContent;
        if (currentText.length > 1) {
            display.textContent = currentText.slice(0, -1);
        } else {
            display.textContent = '0'; 
        }
    }
}
const calc = new Calculator();
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === 'Enter') {
        calc.calculate();
    }
    else if (key === 'Escape') {
        calc.clear();
    } 
    else if( key === 'Backspace'){
        calc.backspace();
    }
    else {
        calc.append(key);
    }
});
function backspace() {
    let display = document.getElementById("output");
    let currentText = display.textContent;
    if (currentText.length > 1) {
        display.textContent = currentText.slice(0, -1);
    } else {
        display.textContent = '0'; 
    }
}





