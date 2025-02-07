function outerFunction() {
    let outerVariable = " Outer function!";

    return function innerFunction() {
        console.log(outerVariable); 
    };
}

let closure = outerFunction(); 
closure();
