function multiply(a , b , c){
    return a * b * c;
}

let multiply1 = multiply.bind(this, 2);

let multiply2 = multiply1.bind(this,3);

console.log(multiply2(5))