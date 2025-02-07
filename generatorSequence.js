function* generator(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    

}

let sequence = [0,...generator()];

console.log(sequence);


