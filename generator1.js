function* generator(){
    yield "0";
    yield "1";
    yield "2";

    return;
}

let a = generator();
console.log(a.next());


console.log(a.next());



console.log("a");