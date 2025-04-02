class Calculator {
    constructor() {
        this.display = document.getElementById("output");
        this.currentInput = "";
        this.operators = {
            "+": this.add,
            "-": this.subtract,
            "*": this.multiply,
            "/": this.divide,
            "sin": this.sin,
            "cos": this.cos,
            "tan": this.tan,
            "sqrt": this.sqrt,
            "log": this.log,
            "exp": this.exp,
            "!": this.fact,
        };
    }

    updateDisplay() {
        this.display.textContent = this.currentInput || "0";
    }

    append(value) {
        this.currentInput += value;
        this.updateDisplay();
    }

    clear() {
        this.currentInput = "";
        this.updateDisplay();
    }

    backspace() {
        this.currentInput = this.currentInput.slice(0, -1) || "0";
        this.updateDisplay();
    }

    calculate() {
        try {
            this.currentInput = this.evaluateExpression(this.currentInput).toString();
        } catch (error) {
            this.currentInput = "Error";
        }
        this.updateDisplay();
    }

    evaluateExpression(expression) {
        let values = [];
        let ops = [];

        const precedence = (op) => ({ "+": 1, "-": 1, "*": 2, "/": 2, "!": 3 }[op] || 0);

        const applyOperator = () => {
            const op = ops.pop();
            const right = values.pop();
            if (op === "!") {
                values.push(this.operators[op](right));
            } else {
                const left = values.pop();
                values.push(this.operators[op](left, right));
            }
        };

        let i = 0;
        while (i < expression.length) {
            let char = expression[i];

            if (char === " ") {
                i++;
                continue;
            }

            if (char >= "0" && char <= "9") {
                let num = "";
                while (i < expression.length && /[0-9.]/.test(expression[i])) {
                    num += expression[i++];
                }
                values.push(parseFloat(num));
            } else if (char === "(") {
                ops.push(char);
                i++;
            } else if (char === ")") {
                while (ops.length && ops[ops.length - 1] !== "(") {
                    applyOperator();
                }
                ops.pop();
                i++;
            } else if (this.operators[char] || this.isFunction(expression, i)) {
                if (this.isFunction(expression, i)) {
                    let funcName = this.getFunction(expression, i);
                    i += funcName.length;

                    let start = i + 1;
                    let end = start;
                    let openParens = 1;
                    while (openParens !== 0 && end < expression.length) {
                        if (expression[end] === "(") openParens++;
                        if (expression[end] === ")") openParens--;
                        end++;
                    }
                    let innerExpression = expression.slice(start, end - 1);
                    let result = this.evaluateExpression(innerExpression);
                    values.push(this.operators[funcName](result));

                    i = end;
                } else {
                    while (ops.length && precedence(ops[ops.length - 1]) >= precedence(char)) {
                        applyOperator();
                    }
                    ops.push(char);
                    i++;
                }
            }
        }
        while (ops.length) {
            applyOperator();
        }
        return values.pop();
    }

    isFunction(expression, i) {
        return ["sin", "cos", "tan", "sqrt", "log", "exp"].some((fn) => expression.startsWith(fn, i)) || expression[i] === "!";
    }

    getFunction(expression, i) {
        return ["sin", "cos", "tan", "sqrt", "log", "exp"].find((fn) => expression.startsWith(fn, i)) || (expression[i] === "!" ? "!" : "");
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
        if (n < 0) return "Error";
        if (n === 0) return 1;
        let res = 1;
        for (let i = 1; i <= n; i++) {
            res *= i;
        }
        return res;
    }
}

function createCalculator() {
    return new Calculator();  
}

const calc = createCalculator();

document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (key === "Enter") {
        calc.calculate();
    } else if (key === "Escape") {
        calc.clear();
    } else if (key === "Backspace") {
        calc.backspace();
    } else if (!isNaN(key) || ["+", "-", "*", "/", ".", "(", ")"].includes(key)) {
        calc.append(key);
    }   
});