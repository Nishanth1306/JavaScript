let readline = require("readline");

let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Enter space-separated values for calculations.");
console.log("All Operations available as Like Scientific Calculator");

calculator();

function calculator() {
    read.question("Enter calculation: ", (input) => {
        if (input.toLowerCase() === "stop") {
            console.log("Thank You");
            read.close();
            return;
        }
        if(input.length === 1 && !input.isNaN){
            console.log("Enter the Numbers, AlPhabets can't be calculated");
            calculator();
            return;
        }

        if (input.length === 0) {
            console.log("Please enter at least two numbers to calculate.");
            console.log("To close the application, enter: stop");
            calculator();
            return;
        }

        let parts = input.split(" ");
        let result;

        if (parts.length > 2) {
            let expression = input.replace(/(sin|cos|tan|sqrt|cbrt|log) (\d+)/g, (match, func, num) => {
                let convertedNum = func.match(/sin|cos|tan/) ? `(${num} * (Math.PI / 180))` : num;
                return `Math.${func}(${convertedNum})`;
            });

            try {
                result = eval(expression);
                console.log("Answer:", result);
            } catch (error) {
                console.log("Invalid expression. Please enter a valid calculation.");
            }
            calculator();
            return;
        }

        if (parts.length === 2) {
            let operator = parts[0];
            let num = parseFloat(parts[1]);

            if (isNaN(num)) {
                console.log("Second Argument just Not Exit");
                calculator();
                return;
            }
            function fact(num){
                let res = 1;
                for (let i = 1; i <= num; i++) {
                    res *= i;
                }
                return res;
            }
            function pi(num){
                return num * 3.144
            }
            switch (operator) {
                case "PI":
                    result = pi(num);
                    break;
        
                case "!":
                    result = fact(num);
                    break;

                case "sqrt":
                    result = Math.sqrt(num);
                    break;
                case "cbrt":
                    result = Math.cbrt(num);
                    break;
                case "log":
                    result = Math.log10(num);
                    break;
                case "sin":
                    result = Math.sin(num * (Math.PI / 180));
                    break;
                case "cos":
                    result = Math.cos(num * (Math.PI / 180));
                    break;
                case "tan":
                    result = Math.tan(num * (Math.PI / 180));
                    break;
                default:
                    console.log("Operation not defined.");
                    calculator();
                    return;
            }
            console.log(`Answer: ${result}\n`);
            calculator();
            return;
        }

        if (parts.length >= 3) {
            let num1 = parseFloat(parts[0]);
            let operator = parts[1];

            if (isNaN(num1)) {
                console.log("Only numbers are accepted.");
                calculator();
                return;
            }

            result = num1;

            for (let i = 2; i < parts.length; i += 2) {
                let num2 = parseFloat(parts[i]);

                switch (operator) {
                    case "+":
                        result += num2;
                        break;
                    case "-":
                        result -= num2;
                        break;
                    case "*":
                        result *= num2;
                        break;
                    case "/":
                        if (num2 === 0) {
                            console.log("Can't divide by zero.");
                            calculator();
                            return;
                        }
                        result /= num2;
                        break;
                    case "%":
                        result %= num2;
                        break;
                    case "^":
                        result = Math.pow(result, num2);
                        break;
                    default:
                        console.log("Invalid operator.");
                        calculator();
                        return;
                }

                if (i + 1 < parts.length) {
                    operator = parts[i + 1];
                }
            }

            console.log(`Answer: ${result}\n`);
            calculator();
            return;
        }
        calculator();
    });
}

