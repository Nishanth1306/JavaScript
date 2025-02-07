const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function applyOperator(a, b, operator) {
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
  let values = [];
  let ops = [];
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
      values.push(parseFloat(num));
      continue;
    }

    
    if (char === 's' || char === 'c' || char === 't' || char === 'l' || char === 'a') {
      let func = '';
      while (i < input.length && /[a-z]/i.test(input[i])) {
        func += input[i++];
      }
      if (['sin', 'cos', 'tan','log', 'ln', 'sqrt', 'exp'].includes(func)) {
        ops.push(func);
      } else {
        throw new Error(`Unknown function ${func}`);
      }
      continue;
    }


    if (char === '(') {
      ops.push(char);
    } else if (char === ')') {
      while (ops.length > 0 && ops[ops.length - 1] !== '(') {
        let operator = ops.pop();
        let b = values.pop();
        let a = values.pop();
        values.push(applyOperator(a, b, operator));
      }
      ops.pop(); 
    }

    else if (['+', '-', '*', '/', '^'].includes(char)) {
      while (ops.length > 0 && getPrecedence(ops[ops.length - 1]) >= getPrecedence(char)) {
        let operator = ops.pop();
        let b = values.pop();
        let a = values.pop();
        values.push(applyOperator(a, b, operator));
      }
      ops.push(char);
    }

    i++;
  }


  while (ops.length > 0) {
    let operator = ops.pop();
    let b = values.pop();
    let a = values.pop();
    values.push(applyOperator(a, b, operator));
  }

  return values.pop();
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
