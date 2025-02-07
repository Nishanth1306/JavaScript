let p1 = Promise.resolve(1);
let p2 = 10;

let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'hii');
})

Promise.all([p1, p2, p3]).then((values) => {
    console.log(values);
})



// Promisification - One Function inside the function, that inner function will return the Promise which is the call
    
