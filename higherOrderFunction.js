function add(a, b, fn){
    return fn(a,b);
}
console.log(add(2,3, (a,b) => a + b));
