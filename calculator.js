let readline = require("readline");

let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("ENter space separated for each number")

calculator();

function calculator() {
   
    read.question("Enter calculation: ", (input) => {

        if (input.toLowerCase() === "stop") {
            console.log("THank You");
            read.close();
            return;
        }
        if(input.length === 0){
            console.log("Please Enter Atleast two number to Calculate");
            console.log("To Close the Application Enter : stop");
            calculator();
            return;
        }

        let parts = input.split(" ");
        let result;


        if(parts.length === 1){
            console.log("Enter Atleast Two Number to do Calculation");
            calculator();
            return;
        }
        if (parts.length >= 3) {
            let num1 = parseFloat(parts[0]);
            let operator = parts[1];

            if (isNaN(num1)) {
                console.log("Only Numbers is Accepted");
                calculator();
                return;
            }
            result = num1;
            for (let i = 2; i < parts.length; i += 2) {
                let nextOperator = operator;
                let num2 = parseFloat(parts[i]);
    
                switch (nextOperator) {
                    case "+":
                        result += num2;
                        break;
                    case "-":
                        result -= num2;
                        break;
                    case "*":
                        result *= num2;
                        break;
                    case "%":
                        result %= num2;
                        break;
                    case "/":
                        if (num2 === 0) {
                            console.log("Can't Divide by Zero");
                            calculator();
                            return;
                        }
                        result /= num2;
                        break;
                    case "^":
                        result = Math.pow(result, num2);
                        break;
                    default:
                        console.log("Only these Operations can be performed +, -, *, /, or ^");
                        calculator();
                        return;
                }
                if (i + 1 < parts.length) {
                    operator = parts[i + 1];
                }
            }
        } 
        else if (parts.length === 2) {
           
            let operator = parts[0];
            let num = parseFloat(parts[1]);

            if (isNaN(num)) {
                console.log("Operation Failed due to missing second argument");
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
                    console.log("Operation not defined");
                    calculator();
                    return;
           }
        }
        
        else {
        
            console.log("Only Numbers will be Calculated");
            calculator();
            return;
        }
        console.log(`Answer: ${result}\n`);
        calculator(); 
    });
}
