function createCalculator() {
    let currentInput = "";
    const display = document.getElementById("output");

    function factorial(n){
        if(n < 0){
            return "Error";
        }
        else if(n === 0){
            return 1;
        }
        let res = 1;
        for(let i = 1;i<=n;i++){
            res *= i;
        }
        return res;
    }
    const operators = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => (b === 0 ? "Error" : a / b),
        "sin": (a) => Math.sin(a * (Math.PI / 180)),
        "cos": (a) => Math.cos(a * (Math.PI / 180)),
        "tan": (a) => Math.tan(a * (Math.PI / 180)),
        "sqrt": (a) => Math.sqrt(a),
        "log": (a) => Math.log(a),
        "exp": (a) => Math.exp(a),
        "!": (a) => factorial(a),
    };
    

    function updateDisplay() {
        display.textContent = currentInput || "0";
    }

    function append(value) {
        currentInput += value;
        updateDisplay();
    }
    function clear() {
        currentInput = "";
        updateDisplay();
    }
    function backspace() {
        currentInput = currentInput.slice(0, -1) || "0";
        updateDisplay();
    }
    function calculate() {
        try {
            currentInput = evaluateExpression(currentInput).toString();
        } catch (error) {
            currentInput = "Error";
        }
        updateDisplay();
    }
    function evaluateExpression(expression) {
        let values = [];
        let ops = [];
        const precedence = (op) => ({ "+": 1, "-": 1, "*": 2, "/": 2, "!": 3 }[op] || 0);
        function applyOperator() {
            const op = ops.pop();
            const right = values.pop();
            if (op === "!") {
                values.push(operators[op](right));
            }
            else {
                const left = values.pop();
                values.push(operators[op](left, right));
            }
        }
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
            } 
            else if (char === "(") {
                ops.push(char);
                i++;
            }
            else if (char === ")") {
                while (ops.length && ops[ops.length - 1] !== "(") {
                    applyOperator();
                }
                ops.pop();
                i++;
            }
            else if (char === "!") {
                values.push(operators[char](values.pop())); 
                i++; 
            } 
            else if (operators[char] || isFunction(expression, i)) {
                if (isFunction(expression, i)) {
                    let funcName = getFunction(expression, i);
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
                    let result = evaluateExpression(innerExpression);
                    values.push(operators[funcName](result));

                    i = end;
                }            
                else {   
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
    function isFunction(expression, i) {
        return ["sin", "cos", "tan", "sqrt", "log", "exp"].some((fn) => expression.startsWith(fn, i)) || expression[i] === "!";
    }
    function getFunction(expression, i) {
        return ["sin", "cos", "tan", "sqrt", "log", "exp"].find((fn) => expression.startsWith(fn, i)) || (expression[i] === "!" ? "!" : "");
    }
    return {
        append,
        clear,
        backspace,
        calculate,
        updateDisplay,
    };
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
