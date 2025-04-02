const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Operator(a, b, operator) {
  switch (operator) {
    case '+': 
    return a + b;
    case '-': 
    return a - b;
    case '*': 
    return a * b;
    case '/':
       return a / b;
    case '^':
       return Math.pow(a, b);


    case 'sin':
       return Math.sin(b); 
    case 'cos':
       return Math.cos(b);
    case 'tan':
       return Math.tan(b);



    case 'log':
       return Math.log10(b); 
    case 'ln':
       return Math.log(b); 
    case 'sqrt':
       return Math.sqrt(b); 
    case 'exp':
       return Math.exp(b); 
       

    default: throw new Error(`Unknown operator ${operator}`);
  }
}

function calculateexpression(input) {
  let digit = [];
  let symbol = [];
  let i = 0;
  while (i < input.length) {
    let char = input[i];

    if (char === ' ') {
      i++;
      continue;
    }
    if (/\d/.test(char) || char === '.') {
      let num = '';
      while (i < input.length && (/\d/.test(input[i]) || input[i] === '.')) {
        num += input[i++];
      }
      digit.push(parseFloat(num));
      continue;
    }

    
    if (char === 's' || char === 'c' || char === 't' || char === 'l' || char === 'a') {
      let func = '';
      while (i < input.length && /[a-z]/i.test(input[i])) {
        func += input[i++];
      }
      if (['sin', 'cos', 'tan','log', 'ln', 'sqrt', 'exp'].includes(func)) {
        symbol.push(func);
      } else {
        throw new Error(`Unknown function ${func}`);
      }
      continue;
    }


    if (char === '(') {
      symbol.push(char);
    } else if (char === ')') {
      while (symbol.length > 0 && symbol[symbol.length - 1] !== '(') {
        let operator = symbol.pop();
        let b = digit.pop();
        let a = digit.pop();
        digit.push(Operator(a, b, operator));
      }
      symbol.pop(); 
    }

    else if (['+', '-', '*', '/', '^'].includes(char)) {
      while (symbol.length > 0 && getPrecedence(symbol[symbol.length - 1]) >= getPrecedence(char)) {
        let operator = symbol.pop();
        let b = digit.pop();
        let a = digit.pop();
        digit.push(Operator(a, b, operator));
      }
      symbol.push(char);
    }

    i++;
  }


  while (symbol.length > 0) {
    let operator = symbol.pop();
    let b = digit.pop();
    let a = digit.pop();
    digit.push(Operator(a, b, operator));
  }

  return digit.pop();
}

function getPrecedence(op) {
  if (op === '+' || op === '-') {
    return 1;
  }
  if (op === '*' || op === '/') {
    return 2;
  }
  if (op === '^') {
    return 3;
  }
  return 0;
}


rl.question('Enter an expression to calculate: ', (userInput) => {
  try {
    const result = calculateexpression(userInput);
    console.log("Result:", result);

  } catch (error) {
    console.log(error.message);
  }
  rl.close();
});
