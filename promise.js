
let promise = new Promise((resolve, reject) => {
    let a = 1 + 2

    if(a == 2){
        resolve('successfull')

    }
    else{
        reject('failed');
    }
})

promise.then((message) => {
    console.log(`This is ${message}`);
})
.catch((message) => {
    console.log(`This is ${message}`);
})



console.log("s");