

let p1 = Promise.resolve(3);

let p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, 'foo');
})

let arr = [p1, p2];

Promise.allSettled(arr).then((result) => {
    result.forEach((result) => console.log(result.value));

})